import React, { useState } from "react";
import AxiosInstance from "../../helpers/axiosInstance";
import { useNavigate } from "react-router-dom"; // To navigate after successful login
import axios from "axios"; // Use axios to make the request to json-server

const LoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // To redirect after successful login

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Reset error

        try {
            // Make a request to json-server to check if the user exists
            const response = await axios.get("http://localhost:3000/users", {
                params: {
                    username,
                    password,
                },
            });

            if (response.data.length > 0) {
                // User found, store token (or just store username if token is not in use)
                if (onLoginSuccess) {
                    onLoginSuccess();
                }
                localStorage.setItem("user-token", JSON.stringify({ token: "some-token" }));
                navigate("/dashboard"); // Redirect to the dashboard page after login
            } else {
                setError("Username or Password is wrong!");
            }
        } catch (err) {
            setError("Login failed. Please try again.", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {error && <div className="alert alert-danger">{error}</div>}

                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
