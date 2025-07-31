import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}
export default App;
