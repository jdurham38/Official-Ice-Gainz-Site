import React from 'react';
import './fonts.css';
import placeholderImage from './placeholderimageicegainz.png';


const AboutMe = () => {
  return (
    <div>
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
          ABOUT US
        </h1>
      </section>

      {/* Section 1 - Welcome to Ice Gainz */}
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          flexDirection: 'row',
          flexWrap: 'wrap',

        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
          }}
        >

          <h2>Welcome to Ice Gainz</h2>
          <p>
            At Ice Gainz, we believe that you shouldn't have to sacrifice taste to reach your fitness goals. That's why we've created a range of delicious protein ice creams that not only satisfy your sweet cravings but also support your muscle recovery and growth.
          </p>
          <p>
            We are passionate about helping you live a healthy and active lifestyle, without compromising on flavor. Our ice creams are carefully crafted using premium ingredients and packed with high-quality protein to fuel your gains.
          </p>
          <p>
            Join us on this tasty journey as we redefine what it means to indulge while making gains. Treat yourself to guilt-free ice cream that nourishes your body and satisfies your dessert desires.
          </p>
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <img
            src={placeholderImage}// Replace with the actual filename of the image
            alt="Welcome to Ice Gainz"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Section 2 - Our Story */}
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          flexDirection: 'row-reverse',
          flexWrap: 'wrap',

        }}
      >

        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
          }}
        >
          <h2>Our Story</h2>
          <p>
            Ice Gainz started as a small family-owned business with a mission to create a healthier alternative to traditional ice cream. It all began when our founder, Jane, struggled to find a dessert that aligned with her fitness goals while still providing the satisfaction of a delicious treat.
          </p>
          <p>
            Inspired by her passion for fitness and her love for ice cream, Jane set out to develop a protein ice cream that would bridge the gap between taste and nutrition. With meticulous attention to detail and countless taste tests, Ice Gainz was born.
          </p>
          <p>
            Today, Ice Gainz continues to grow, spreading joy and health one scoop at a time. We are grateful for the support of our amazing community and the opportunity to be part of your journey towards a fitter, happier, and tastier life.
          </p>
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <img
            src={placeholderImage} // Replace with the actual filename of the image
            alt="Our Story"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Section 3 - Josh - The Owner */}
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          flexDirection: 'row',
          flexWrap: 'wrap',

        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
          }}
        >
          <h2>Josh - The Owner</h2>
          <p>
            Josh, the passionate owner of Ice Gainz, has always been driven by a strong desire to help others achieve their fitness goals. With his entrepreneurial spirit and love for ice cream, he embarked on a mission to create a brand that combines indulgence and nutrition. Under his leadership, Ice Gainz has grown into a beloved provider of protein ice creams, inspiring countless individuals to pursue a healthier lifestyle.
          </p>
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <img
            src={placeholderImage} // Replace with the actual filename of the image
            alt="Josh - The Owner"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Section 4 - Giuseppe - The Chef */}
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          flexDirection: 'row-reverse',
          flexWrap: 'wrap',

        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
          }}
        >
          <h2>Giuseppe - The Chef</h2>
          <p>
            Giuseppe, our talented chef, brings a wealth of culinary expertise to Ice Gainz. With his creativity and dedication to quality, he crafts each batch of protein ice cream with precision and care. Giuseppe's culinary mastery ensures that every scoop of Ice Gainz is a delightful experience, combining exceptional taste with the nutritional benefits you deserve.
          </p>
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <img
            src={placeholderImage} // Replace with the actual filename of the image
            alt="Giuseppe - The Chef"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Section 5 - Christina - Marketing and Design */}
      <section
        style={{
          backgroundColor: '#F8D3E2',
          padding: '50px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          flexDirection: 'row',
          flexWrap: 'wrap',

        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 20px',
          }}
        >
          <h2>Christina - Marketing and Design</h2>
          <p>
            Christina, our marketing and design expert, is the creative force behind Ice Gainz's brand image. Her keen eye for aesthetics and understanding of consumer preferences has played a pivotal role in establishing Ice Gainz as a recognizable and desirable brand. With her innovative ideas and strategic approach, Christina ensures that our message reaches the right audience and resonates with ice cream lovers looking to make gains in style.
          </p>
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <img
            src={placeholderImage} // Replace with the actual filename of the image
            alt="Christina - Marketing and Design"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
