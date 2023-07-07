import React from "react";
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/SideBar";
import FAQ from "./pages/Faq";
import MoreFAQ from "./pages/MoreFAQ";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Sidebar />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/faq" element={<MoreFAQ />} />
      <Route path="/product/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;