// import React from 'react'

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/products/ProductDetails";
import Products from "../../components/products/Products";
import { ProductContext } from "../../context/ProductContext";

export default function ProductDetail() {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.filter((item) => item._id === productId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ProductDetails item={product[0]} />
      <div>
        <Products />
      </div>
    </div>
  );
}
