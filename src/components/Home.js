import React from 'react';
import placeholderImage from './placeholderimageicegainz.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './fonts.css';

function Home() {
  return (
    <div className="homepage" style={{ backgroundColor: 'white' }}>
      <section
        style={{
          backgroundColor: '#B4E6FE',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          border: '2px solid black',
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
          ICE GAINZ
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#000000',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            fontFamily: 'FrozenFont, Arial, sans-serif',
            borderRadius: '10px',
            padding: '5px 10px',
          }}
        >
          ICE CREAM DREAMS, TIME FOR GAINZ SUPREME!
        </p>
      </section>
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between', // Align the items to the right
          alignItems: 'center',
          border: '2px solid black',
          flexWrap: 'wrap', // Add this to wrap the items in case of smaller screens
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            width: '100%', // Adjust the width to take the full width on smaller screens
            maxWidth: '500px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2>Products</h2>
          <p>
            Explore our wide range of high-quality products. We have a variety of collections. Whatever your dietary restrictions are, we have Ice Cream for
            you! Including Bulking, Cutting, Dairy Free, Nut Free, and Vegan.
          </p>
          <a href="/products">
            <button>Shop Now</button>
          </a>
        </div>
        <div
          className="container"
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            width: '100%', // Adjust the width to take the full width on smaller screens
            maxWidth: '400px', // Reduce the max width for the first carousel
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={false}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    zIndex: 2,
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '24px',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '20px',
                  }}
                >
                  &larr;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    zIndex: 2,
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '24px',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '20px',
                  }}
                >
                  &rarr;
                </button>
              )
            }
          >
            <div>
              <img src={placeholderImage} alt="Product 1" />
              <p className="legend">Product 1</p>
            </div>
            <div>
              <img src={placeholderImage} alt="Product 2" />
              <p className="legend">Product 2</p>
            </div>
            {/* Add more carousel items as needed */}
          </Carousel>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#9BD3E2',
          padding: '50px 0',
          display: 'flex',
          flexDirection: 'row-reverse',
          border: '2px solid black',
          flexWrap: 'wrap', // Add this to wrap the items in case of smaller screens
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            width: '100%', // Adjust the width to take the full width on smaller screens
            maxWidth: '400px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2>About Us</h2>
          <p>Learn more about our company and our mission.</p>
          <a href="/aboutme">
            <button>Learn More</button>
          </a>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between', // Align the items to the right
          alignItems: 'center',
          border: '2px solid black',
          flexWrap: 'wrap', // Add this to wrap the items in case of smaller screens
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            width: '100%', // Adjust the width to take the full width on smaller screens
            maxWidth: '500px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2>Contact</h2>
          <p>
            Have a concern, request for a new flavor, or have a question? Get in touch with our friendly customer support team, and we are happy to help!
          </p>
          <a href="/contact">
            <button>Contact Us</button>
          </a>
        </div>
        <div
          className="container"
          style={{
            padding: '20px',
            borderRadius: '8px',
            margin: '20px',
            width: '100%', // Adjust the width to take the full width on smaller screens
            maxWidth: '600px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Carousel
            showThumbs={true}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={false}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    zIndex: 2,
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '24px',
                    position: 'absolute',
                    top: '60%',
                    transform: 'translateY(-50%)',
                    left: '20px',
                  }}
                >
                  &larr;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    zIndex: 2,
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: 'none',
                    borderRadius: '50%',
                    fontSize: '24px',
                    position: 'absolute',
                    top: '60%',
                    transform: 'translateY(-50%)',
                    right: '20px',
                  }}
                >
                  &rarr;
                </button>
              )
            }
            renderIndicator={() => null}
          >
            <div>
              <p className="review">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec fringilla dui. In euismod dolor ac libero ultricies, non congue metus
                pellentesque."
              </p>
              <p className="review-author">- John Doe</p>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
            <div>
              <p className="review">
                "Vestibulum non mattis dolor. Duis rutrum sem non sem tristique, sed lacinia lorem tristique. Praesent rutrum nunc ut dolor vulputate, et
                varius felis fermentum."
              </p>
              <p className="review-author">- Jane Smith</p>
              <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </Carousel>
        </div>
      </section>

      <footer>
        <p style={{ textAlign: 'center' }}>&copy; 2023 Ice Gainz LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
