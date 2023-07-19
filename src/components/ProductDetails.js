import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getProduct as GetProduct } from '../graphql/queries';
import { Storage } from 'aws-amplify';
import { useParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [productImages, setProductImages] = useState([]); // Array to store image URLs
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  useEffect(() => {
    if (product && product.image) {
      getImageURL();
    }
  }, [product]);

  async function fetchProduct(productId) {
    try {
      if (!productId) {
        console.log('Product ID is missing');
        return;
      }

      const productData = await API.graphql(graphqlOperation(GetProduct, { id: productId }));
      setProduct(productData.data.getProduct);

      // Store the image URLs in the productImages state
      if (productData.data.getProduct.images) {
        const images = productData.data.getProduct.images.map(async (image) => {
          const imageUrl = await Storage.get(image);
          return imageUrl;
        });
        const imageUrls = await Promise.all(images);
        setProductImages(imageUrls);
      }
    } catch (error) {
      console.log('Error fetching product:', error);
    }
  }

  async function getImageURL() {
    try {
      const imageUrl = await Storage.get(product.image);
      setImageURL(imageUrl);
    } catch (error) {
      console.log('Error getting image URL:', error);
    }
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, description, nutritionalfacts, price, type, collection } = product;

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <h2 style={centeredTitle}>{collection} Collection</h2>

        {imageURL && (
          <div style={centeredImageContainer}>
            <img src={imageURL} alt={name} style={centeredImageStyle} />
          </div>
        )}
        <b>
          <p style={centeredTitle}>
            {name} - ${price}
          </p>
        </b>
        <b><p style={centeredTitle}>{type}</p></b>

        <div style={detailsContainerStyle}>
          <div style={boxStyle}>
            <b><p style={centeredTitle}>Description:</p></b>
            <p>{description}</p>
          </div>

          <div style={boxStyle}>
          <b><p style={centeredTitle}>Nutritional Information:</p></b>
            <p>{nutritionalfacts}</p>
          </div>




        </div>


      </div>
    </div>
  );
}



const backgroundStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#f0f0f0',
};

const containerStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  width: '100%', // Use 100% width for full-width container
  maxWidth: '800px',
  boxSizing: 'border-box',
};

const centeredTitle = {
  textAlign: 'center',
};

const centeredImageContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const centeredImageStyle = {
  width: '500px', // Use 100% width for full-width image
  height: 'auto', // Allow image height to adjust proportionally
};

const detailsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const boxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px',
};

// Responsive styles using media queries
const breakpointSmall = '480px';
const breakpointMedium = '768px';

// Adjust container width for small screens
const containerStyleSmallScreen = {
  width: '90%',
  maxWidth: '100%',
};

// Adjust image width for small and medium screens
const centeredImageStyleSmallScreen = {
  width: '100%',
  height: 'auto',
  maxWidth: '400px',
};

// Adjust box styles for small and medium screens
const boxStyleSmallScreen = {
  padding: '10px',
  margin: '5px',
};

// Media query for small screens
const smallScreenMediaQuery = `@media (max-width: ${breakpointSmall}) {
  ${containerStyle} {
    ${containerStyleSmallScreen}
  }
  ${centeredImageStyle} {
    ${centeredImageStyleSmallScreen}
  }
  ${boxStyle} {
    ${boxStyleSmallScreen}
  }
}`;

// Add media query styles to the component
const styleWithMediaQueries = `
  ${backgroundStyle}
  ${containerStyle}
  ${centeredImageStyle}
  ${boxStyle}
  ${smallScreenMediaQuery}
`;


export default ProductDetails;
