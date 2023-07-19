import React from "react";
import userData from "./constants/data";
import emailjs from "emailjs-com";

import './fonts.css'

export default function Contact() {
  const send = (e) => {
    e.preventDefault();

    // Send user's message
    emailjs
      .send(
        "service_0xwkh51",
        "template_lscrldk",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        },
        "9u3bvylFqjIva-sQx"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        e.target.reset();

        // Send auto-reply
        emailjs
          .send(
            "service_0xwkh51",
            "template_auto_reply",
            {
              name: e.target.name.value,
              email: e.target.email.value,
            },
            "9u3bvylFqjIva-sQx"
          )
          .then((response) => {
            console.log("Auto-reply sent!", response.status, response.text);
          })
          .catch((error) => {
            console.log("Failed to send auto-reply...", error);
          });
      })
      .catch((error) => {
        console.log("Failed to send message...", error);
      });
  };

  return (
    <div>
      <section style={{ backgroundColor: '#B4E6FE', padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '16px', color: '#000000', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: 'FrozenFont, Arial, sans-serif', letterSpacing: '1px', borderRadius: '20px', padding: '10px 20px' }}>
          CONTACT US
        </h1>
      </section>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70vh", padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ display: "flex", flexWrap: 'wrap', width: "70%", maxWidth: "1200px", height: "auto" }}>
          <div style={{ flex: 1, background: "#B4E6FE", color: "#000000", padding: "20px", borderRadius: "30px", marginRight: "20px", marginBottom: '20px' }}>
            <header style={{ textAlign: 'center' }}>
              <h1>Get in touch, let's talk.</h1>
              <p>Fill in the details and we'll get back to you as soon as possible!</p>
            </header>
            <div>
              <div style={{ marginBottom: '10px' }}>
                <p>{userData.phone}</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p>{userData.email}</p>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p>{userData.address}</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href={userData.socialLinks.facebook} style={{ margin: '5px' }}>
                    <svg width="24" height="24" className="text-gray-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href={userData.socialLinks.twitter} style={{ margin: '5px' }}>
                    <svg width="24" height="24" className="text-gray-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href={userData.socialLinks.instagram} style={{ margin: '5px' }}>
                    <svg width="24" height="24" className="text-gray-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, background: "#FFCCE5", color: "#000000", padding: "20px", borderRadius: "30px", marginRight: "20px", marginBottom: '20px' }}>

            <form onSubmit={send} style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" style={{ marginBottom: "10px" }} />

              <label htmlFor="email">Email</label>
              <input type="text" name="email" style={{ marginBottom: "10px" }} />

              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Be sure to put your email and number so we can get back to you!"
                style={{ marginBottom: "10px" }}
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
