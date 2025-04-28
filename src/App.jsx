import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./routes/Home/Home";
import Transfer from "./routes/Transfer/Transfer";
import { LoginPage } from "./routes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const isAuthenticated = localStorage.getItem("user-token");
  return (
    <HashRouter>
      <Routes>
        {/* Public Route - Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <>
                <Navbar /> {/* Render Navbar only if authenticated */}
                <Home />
              </>
            ) : (
              <LoginPage /> // If not authenticated, show login page
            )
          }
        />
        <Route
          path="/transfer"
          element={
            isAuthenticated ? (
              <>
                <Navbar /> {/* Render Navbar only if authenticated */}
                <Transfer />
              </>
            ) : (
              <LoginPage /> // If not authenticated, show login page
            )
          }
        />
        {/* Add more protected routes as needed */}
      </Routes>
    </HashRouter>
  );
}

export default App;
