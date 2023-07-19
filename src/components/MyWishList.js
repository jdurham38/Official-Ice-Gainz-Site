import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        try {
            // Replace 'getWishlist' with your API method to retrieve the user's wishlist
            const response = await API.get('yourAPIName', '/wishlist');
            setWishlist(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching wishlist:', error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>My Wishlist</h1>
            {wishlist.length > 0 ? (
                <ul>
                    {wishlist.map((product) => (
                        <li key={product.id}>
                            {/* Display product details, e.g., name, price, description, etc. */}
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products in the wishlist.</p>
            )}
        </div>
    );
};

export default Wishlist;
