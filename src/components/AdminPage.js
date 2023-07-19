import React, { useEffect, useState } from 'react';
import { DataStore, Storage, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Product } from '../models/index';

function AdminPage() {
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [productCollection, setProductCollection] = useState('');
  const [productNutritionalFacts, setProductNutritionalFacts] = useState('');
  const [productType, setProductType] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productInventory, setProductInventory] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
    fetchProducts();
    fetchProductImages();

  }, []);

  async function checkAuthState() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userGroups = user.signInUserSession.accessToken.payload['cognito:groups'];
      const isAdmin =
        userGroups && (userGroups.includes('admincognitousers') || userGroups.includes('cognitoadmin'));
      setIsAuthenticated(isAdmin);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  async function fetchProducts() {
    try {
      const products = await DataStore.query(Product);
      setProductList(products);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  async function createProduct() {
    if (!productName || !productImage) {
      return;
    }

    const imageName = `product_${Date.now()}`;
    const key = `images/${imageName}`;
    const mimeType = productImage.type;

    try {
      await Storage.put(key, productImage, { contentType: mimeType });

      const product = await DataStore.save(
        new Product({
          name: productName,
          image: key,
          description: productDescription,
          nutritionalfacts: productNutritionalFacts,
          price: productPrice,
          inventory: productInventory,
          collection: productCollection,
          type: productType,
        })
      );

      setProductList((prevList) => [...prevList, product]);
      setProductName('');
      setProductImage(null);
      setProductDescription('');
      setProductNutritionalFacts('');
      setProductCollection('');
      setProductType('');
      setProductPrice(0);
      setProductInventory(0);

      console.log('Product created');
    } catch (error) {
      console.log('Error creating product:', error);
    }
  }

  async function deleteProduct(id) {
    try {
      const productToDelete = await DataStore.query(Product, id);
      await Storage.remove(productToDelete.image);
      await DataStore.delete(productToDelete);

      setProductList((prevList) => prevList.filter((product) => product.id !== id));

      console.log('Product deleted');
    } catch (error) {
      console.log('Error deleting product:', error);
    }
  }

  async function updateProduct(id, updatedFields) {
    try {
      const productToUpdate = await DataStore.query(Product, id);
      const updatedProduct = await DataStore.save(
        Product.copyOf(productToUpdate, (updated) => {
          updated.name = updatedFields.name || productToUpdate.name;
          updated.image = updatedFields.image || productToUpdate.image;
          updated.description = updatedFields.description || productToUpdate.description;
          updated.nutritionalfacts = updatedFields.nutritionalfacts || productToUpdate.nutritionalfacts;
          updated.price = updatedFields.price || productToUpdate.price;
          updated.inventory = updatedFields.inventory || productToUpdate.inventory;
          updated.collection = updatedFields.collection || productToUpdate.collection;
          updated.type = updatedFields.type || productToUpdate.type;
        })
      );

      setProductList((prevList) =>
        prevList.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
      );

      console.log('Product updated:', updatedProduct);
    } catch (error) {
      console.log('Error updating product:', error);
    }
  }


  const fetchProductImages = async () => {
    const imagePromises = productList.map(async (product) => {
      const imageUrl = await Storage.get(product.image);
      return {
        ...product,
        imageUrl,
      };
    });
    const productsWithImages = await Promise.all(imagePromises);
    setProductList(productsWithImages);
  };

  if (!isAuthenticated) {
    return <div>Please log in to access the admin page.</div>;
  }

  return (
    <div>
      <h1>Admin Page</h1>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Nutritional Facts</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Collection</th>
            <th>Type</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: '100px', height: '100px' }}
                  />
                )}
              </td>
              <td>{product.name}</td>
              <td>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) => updateProduct(product.id, { description: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.nutritionalfacts}
                  onChange={(e) => updateProduct(product.id, { nutritionalfacts: e.target.value })}
                />
              </td>

              <td>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => updateProduct(product.id, { price: parseFloat(e.target.value) })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.inventory}
                  onChange={(e) => updateProduct(product.id, { inventory: parseInt(e.target.value) })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.collection}
                  onChange={(e) => updateProduct(product.id, { collection: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={product.type}
                  onChange={(e) => updateProduct(product.id, { type: e.target.value })}
                />
              </td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                <button onClick={() => updateProduct(product.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={(e) => setProductImage(e.target.files[0])} />
      <input
        type="text"
        placeholder="Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nutritional Facts"
        value={productNutritionalFacts}
        onChange={(e) => setProductNutritionalFacts(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Inventory"
        value={productInventory}
        onChange={(e) => setProductInventory(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Collection"
        value={productCollection}
        onChange={(e) => setProductCollection(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
      />
      <button onClick={createProduct}>Create</button>
    </div>
  );
}

export default withAuthenticator(AdminPage, {
  includeGreetings: false,
  authenticatorComponents: [],
  federated: null,
  signUpConfig: null,
  groups: ['admincognitousers', 'cognitoadmin'], // Specify the allowed user groups here
});
