import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            // Replace 'getOrders' with your API method to retrieve the user's orders
            const response = await API.get('yourAPIName', '/orders');
            setOrders(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching orders:', error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>My Orders</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            {/* Display order details, e.g., order ID, date, items, etc. */}
                            <p>Order ID: {order.id}</p>
                            <p>Date: {order.date}</p>
                            <p>Items: {order.items.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders available.</p>
            )}
        </div>
    );
};

export default MyOrders;
