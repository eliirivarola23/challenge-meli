import React from "react";
import ProductDetail from "../../components/ProductDetail";
import MenuHeader from "../../components/MenuHeader";
import Breadcrumb from "../../components/Breadcrumb";
import { BREADCRUMBS_PRODUCT_DETAIL } from "./constants";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <>
      <MenuHeader />
      <Breadcrumb crumbs={BREADCRUMBS_PRODUCT_DETAIL} />
      <div className={styles.container_product}>
        <ProductDetail isView />
      </div>
    </>
  );
};

export default Product;
