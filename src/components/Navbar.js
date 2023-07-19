import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Navbar = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const shouldReloadRef = useRef(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    window.location.reload();
  };

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
      shouldReloadRef.current = false;
    } catch (error) {
      console.log('User not signed in');
    }
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };
  

  const handleDropdownToggle = (dropdownName) => {
    setSelectedDropdown(dropdownName === selectedDropdown ? null : dropdownName);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  // Function to handle click on mobile dropdown items
  const handleMobileDropdownItemClick = (dropdownName) => {
    setActiveMobileDropdown(dropdownName === activeMobileDropdown ? null : dropdownName);
  };

  const mobileMenuStylesMobile = (isOpen, dropdownName) => {
    const styles = {
      ...mobileMenuStyles(isOpen),
      left: 'auto', // Reset the left property for other dropdowns
    };
    if (isOpen && (dropdownName === 'about' || dropdownName === 'products' || dropdownName === 'account')) {
      styles.left = '0'; // Align the specific dropdown to the left of the mobile menu
    }
    return styles;
  };

  

  const isAbove450 = window.innerWidth > 450;

  // Add spacing between each navbar link
  const linkSpacing = 10; // Adjust the spacing as per your requirement

  const navStyles = {
    backgroundColor: 'white',
    padding: '10px',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '9999', // Increase the z-index to ensure the menu is above other elements
  };

  const navContentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const brandLinkStyles = {
    textDecoration: 'none',
    justifyContent: 'space-between',
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const menuButtonStyles = {
    background: 'none',
    justifyContent: 'center',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
  };

  const ulStyles = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

  const liStyles = {
    margin: '0 10px',
    position: 'relative',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'black',
  };

  // Update the height of the nav element to accommodate the expanded mobile menu
  const navHeight = isMobileMenuOpen ? '200px' : 'auto';
  const mobileMenuStyles = (isOpen) => ({
    listStyle: 'none',
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    right: '0',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: '9999',
    height: navHeight, // Set the height of the mobile menu
    color: isOpen ? 'blue' : 'red', // Change color based on menu open/close state
  });
  const dropdownStyles = {
    listStyle: 'none',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%', // Center the dropdown horizontally
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transform: 'translateX(-50%)', // Move the dropdown left by 50% of its own width to center it
  };

  const dropdownLinkStyles = {
    textDecoration: 'none',
    color: 'black',
  };

  const logoutButtonStyles = {
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  };

  // Media query for smaller screens
  const mediaQuery = '@media (max-width: 768px)';
  ulStyles[mediaQuery] = {
    ...ulStyles,
    flexDirection: 'column',
    alignItems: 'center',
  };

  liStyles[mediaQuery] = {
    ...liStyles,
    marginBottom: linkSpacing, // Spacing between items for smaller screens
  };

  dropdownStyles[mediaQuery] = {
    ...dropdownStyles,
    right: 'auto',
    left: '0',
    display: 'none',
  };

  // For mobile view (below 450 pixels)
  const dropdownLinkStylesMobile = {
    ...dropdownLinkStyles,
    color: 'blue', // Change the color to your desired color
  };

  dropdownLinkStyles[mediaQuery] = {
    ...dropdownLinkStylesMobile, // Use the mobile styles for dropdown links
    display: 'block',
    textAlign: 'center',
    padding: '5px 0',
  };
  logoutButtonStyles[mediaQuery] = {
    ...logoutButtonStyles,
    display: 'block',
    textAlign: 'center',
    padding: '5px 0',
  };


  // Function to update the dropdown position based on the parent element
  const updateDropdownPosition = (parentElement) => {
    const parentRect = parentElement.getBoundingClientRect();
    setDropdownPosition({
      left: parentRect.left + parentRect.width / 2, // Center the dropdown horizontally under the parent
      top: parentRect.bottom, // Position the dropdown just below the parent
    });
  };


  return (
    <nav style={navStyles}>
      <div style={navContentStyles}>
        <Link style={brandLinkStyles} to="/">
          Your Brand
        </Link>
        {isAbove450 ? (
          <ul style={ulStyles}>
            <li>
              <Link style={linkStyles} to="">
                Home
              </Link>
            </li>
            <li
              onMouseEnter={(e) => {
                handleDropdownToggle('about');
                updateDropdownPosition(e.currentTarget);
              }}
              onMouseLeave={() => handleDropdownToggle('about')}
            >
              <Link style={linkStyles} to="/aboutme">
                About Us
              </Link>
              {selectedDropdown === 'about' && (
                <ul
                  style={{
                    ...dropdownStyles,
                    left: `${dropdownPosition.left}px`,
                    top: `${dropdownPosition.top}px`,
                  }}
                >
                  <li>
                    <Link style={dropdownLinkStyles} to="/blogs">
                      Learn About Health
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={(e) => {
                handleDropdownToggle('products');
                updateDropdownPosition(e.currentTarget);
              }}
              onMouseLeave={() => handleDropdownToggle('products')}
            >
              <Link style={linkStyles} to="/products">
                Products
              </Link>
              {selectedDropdown === 'products' && (
                <ul
                  style={{
                    ...dropdownStyles,
                    left: `${dropdownPosition.left}px`,
                    top: `${dropdownPosition.top}px`,
                  }}
                >
                  <li>
                    <Link style={dropdownLinkStyles} to="/product-collection/bulkingcollection">
                      Bulking Collection
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link style={linkStyles} to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link style={linkStyles} to="/contact">
                Contact
              </Link>
            </li>
            <li
              onMouseEnter={(e) => {
                handleDropdownToggle('account');
                updateDropdownPosition(e.currentTarget);
              }}
              onMouseLeave={() => handleDropdownToggle('account')}
            >
              <Link style={linkStyles} to="/account">
                {user ? `Hello, ${user.username}` : 'Account'}
              </Link>
              {selectedDropdown === 'account' && (
                <ul
                  style={{
                    ...dropdownStyles,
                    left: `${dropdownPosition.left}px`,
                    top: `${dropdownPosition.top}px`,
                  }}
                >
                  {user ? (
                    <>
                      <li>
                        <Link style={dropdownLinkStyles} to="/account">
                          My Account
                        </Link>
                      </li>
                      <li>
                        <button style={logoutButtonStyles} onClick={handleSignOut}>
                          Logout
                        </button>
                      </li>
                      {/* Add more dropdown items for the user */}
                    </>
                  ) : (
                    <>
                      <li>
                        <Link style={dropdownLinkStyles} to="/signup">
                          Create Account/Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </li>
          </ul>
        ) : (
          <button style={menuButtonStyles} onClick={handleMobileMenuToggle}>
            <span>&#9776;</span> {/* "Hamburger" icon */}
          </button>
        )}
      </div>
      {!isAbove450 && (
        <ul style={{ ...ulStyles, ...mobileMenuStyles(isMobileMenuOpen) }}>
          <li>
            <Link style={linkStyles} to="">
              Home
            </Link>
          </li>
          <li
            onMouseEnter={() => handleMobileDropdownItemClick('about')}
            onMouseLeave={() => handleMobileDropdownItemClick('about')}
          >
            <Link style={linkStyles} to="/aboutme">
              About Us
            </Link>
            {activeMobileDropdown === 'about' && (
              <ul style={dropdownStyles}>
                <li>
                  <Link style={dropdownLinkStylesMobile} to="/blogs">
                    Learn About Health
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMobileDropdownItemClick('products')}
            onMouseLeave={() => handleMobileDropdownItemClick('products')}
          >
            <Link style={linkStyles} to="/products">
              Products
            </Link>
            {activeMobileDropdown === 'products' && (
              <ul style={dropdownStyles}>
                <li>
                  <Link style={dropdownLinkStylesMobile} to="/product-collection/bulkingcollection">
                    Bulking Collection
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link style={linkStyles} to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/contact">
              Contact
            </Link>
          </li>
          <li
            onMouseEnter={() => handleMobileDropdownItemClick('account')}
            onMouseLeave={() => handleMobileDropdownItemClick('account')}
          >
            <Link style={linkStyles} to="/account">
              {user ? `Hello, ${user.username}` : 'Account'}
            </Link>
            {activeMobileDropdown === 'account' && (
              <ul style={dropdownStyles}>
                {user ? (
                  <>
                    <li>
                      <Link style={dropdownLinkStylesMobile} to="/account">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <button style={logoutButtonStyles} onClick={handleSignOut}>
                        Logout
                      </button>
                    </li>
                    {/* Add more dropdown items for the user */}
                  </>
                ) : (
                  <>
                    <li>
                      <Link style={dropdownLinkStylesMobile} to="/signup">
                        Create Account/Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
          {/* Add the rest of the menu items for mobile view here */}
        </ul>
      )}
    </nav>
  );
  
                };  

export default Navbar;
