import { DataStore, Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Product } from '../models/index';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Products() {
  const [productIds, setProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState({});
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProductImages = async () => {
      const imagePromises = products.map(async (product) => {
        const imageUrl = await Storage.get(product.image);
        setProductImages((prevImages) => ({
          ...prevImages,
          [product.id]: imageUrl,
        }));
      });
      await Promise.all(imagePromises);
    };

    fetchProductImages();
  }, [products]);

  async function fetchProducts() {
    try {
      const products = await DataStore.query(Product);
      setProducts(products);
      const ids = products.map((product) => product.id);
      setProductIds(ids);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  const handleProductHover = (productId) => {
    setHoveredProductId(productId);
  };

  const handleProductLeave = () => {
    setHoveredProductId(null);
  };


  const renderDescription = (description) => {
    const words = description.split(' ');
    const truncatedDescription = words.slice(0, 30).join(' ');
    const showDots = words.length > 30;
    return showDots ? `${truncatedDescription}...` : truncatedDescription;
  };

 

  return (
    <div style={{ padding: '20px' }}>
      <section
        style={{
          backgroundColor: '#B4E6FE',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '48px',
            marginBottom: '16px',
            color: '#000000',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'FrozenFont, Arial, sans-serif',
            letterSpacing: '1px',
            borderRadius: '20px',
            padding: '10px 20px',
          }}
        >
          PRODUCTS
        </h1>
      </section>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Auto-fit with a minimum of 300px column width
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto', // Remove fixed height
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#e8f0fe',
              padding: '10px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
            onMouseLeave={handleProductLeave}
          
          >
            <h2 style={{ marginBottom: '8px', textAlign: 'center' }}>{product.title}</h2>
            <div
              style={{ position: 'relative', width: '300px', height: '300px', overflow: 'hidden' }}
              onMouseEnter={() => handleProductHover(product.id)}
            >
              <img
                src={productImages[product.id]}
                alt={`Product ${product.id}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {hoveredProductId === product.id && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '4px',
                    zIndex: 1,
                  }}
                >
                  <div>
                    <p style={{ textAlign: 'center', margin: 0 }}>
                      {renderDescription(product.description)}
                      {product.description.split(' ').length > 30 && <span>...</span>}
                    </p>
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                      <div
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#000000',
                          padding: '4px 12px',
                          borderRadius: '4px',
                        }}
                      >
                        <Link
                          to={`/products/${product.id}`}
                          style={{
                            textDecoration: 'none',
                            color: '#ffffff',
                            fontWeight: 'bold',
                          }}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
                textAlign: 'center',
              }}
            >
              <div style={{ backgroundColor: '#bde4ff', padding: '10px', borderRadius: '4px' }}>
                <Link
                  to={`/products/${product.id}`}
                  style={{
                    textDecoration: 'none',
                    color: '#000000',
                    fontWeight: 'bold',
                    position: 'relative',
                  }}
                >
                  View Details
                </Link>
              </div>
              <span style={{ fontWeight: 'bold', marginLeft: '8px' }}>$ {product.price}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;