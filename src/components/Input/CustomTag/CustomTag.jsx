import React from "react";
import { FaCheck } from "react-icons/fa"; // You can replace with any other icons

const CustomTag = ({ color, text, leftIcon }) => {
    return (
        <span
            className={`badge rounded-pill text-${color} ${leftIcon ? "d-flex align-items-center" : ""}`}
            style={{ backgroundColor: color === "light" ? "#f8f9fa" : color, color: color === "light" ? "#000" : "#fff" }}
        >
            {leftIcon && <span className="me-2"><FaCheck /> {/* Example icon */}</span>}
            {text}
        </span>
    );
};

export default CustomTag;
