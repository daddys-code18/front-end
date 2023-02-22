import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
          <Route path="/add" element={<h1> Add Product Component</h1>}></Route>
          <Route
            path="/update"
            element={<h1> Update Product Component</h1>}
          ></Route>
          <Route
            path="/logout"
            element={<h1> Logout Product Component</h1>}
          ></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
