import React from "react";
import ProductDetail from "../../components/ProductDetail";
import MenuHeader from "../../components/MenuHeader";

const Product = () => {
  return (
    <>
      <MenuHeader />
      <div style={{ padding: '15px', display: 'flex', justifyContent: 'center'}}>
        <ProductDetail isView />
      </div>
    </>
  );
};

export default Product;
