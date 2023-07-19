import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import AboutMe from './components/About';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Signup from './components/Signup';
import BulkingCollection from './components/BulkingCollection';
import Account from './components/Account';
import MyOrders from './components/MyOrders';
import MyWishList from './components/MyWishList';
import ProductDetails from './components/ProductDetails';
import AdminPage from './components/AdminPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/product-collection/bulkingcollection" element={<BulkingCollection />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={<Account />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mywishlist" element={<MyWishList />} />
            <Route path="/adminpage" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
