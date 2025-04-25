// filepath: 
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./routes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;