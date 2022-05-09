import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link id="link" style={{ textDecoration: "none" }} to="/admin/products">
        <p className="sidebar-text">All Products</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin/product">
        <p>New Product</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin/accessories">
        <p>All Accessories</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin/accessory">
        <p>New Accessories</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin/units">
        <p>All Unit Price</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/admin/unit">
        <p>New Unit Price</p>
      </Link>
    </div>
  );
};

export default Sidebar;
