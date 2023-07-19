import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const MyAccount = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching user:', error);
            setIsLoading(false);
        }
    };

    const handleUpdateProfile = () => {
        // Handle the profile update logic
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>User not found.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
            <p>Email: {user.attributes.email}</p>
            <p>Phone Number: {user.attributes.phone_number}</p>
            {/* Render additional user information as needed */}
            <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
    );
};

export default MyAccount;
