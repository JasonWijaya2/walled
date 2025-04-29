import { useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./routes/Home/Home";
import Transfer from "./routes/Transfer/Transfer";
import { LoginPage } from "./routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user-token"));

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <>
                <Navbar onSignOut={() => setIsAuthenticated(false)} />
                <Home />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/transfer"
          element={
            isAuthenticated ? (
              <>
                <Navbar onSignOut={() => setIsAuthenticated(false)} />
                <Transfer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
