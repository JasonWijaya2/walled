import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("user-token"); // Check if the user is authenticated

    if (!isAuthenticated) {
        // If not authenticated, redirect to login page and pass the current location to allow redirection after login
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children; // If authenticated, render the child component (the protected route)
};

export default PrivateRoute;
