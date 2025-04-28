import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./routes/Home/Home";
import Transfer from "./routes/Transfer/Transfer";

function App() {
  return (
    <HashRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          {/* <Route path="/topup" element={<Topup />} />
          <Route path="/signout" element={<SignOut />} /> */}
        </Routes>
      </Navbar>
    </HashRouter>
  );
}

export default App;
