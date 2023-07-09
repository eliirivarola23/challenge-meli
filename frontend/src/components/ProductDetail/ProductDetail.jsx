import React from "react";
import styles from "./ProductDetail.module.css";
import { HeaderProductDetail } from "./components/HeaderProductDetail";

const ProductDetail = ({ isView = false, children }) => {
  return (
    <div className={styles.container_productDetail}>
      <div className={styles.productDetail_container_detail}>
        <HeaderProductDetail
          photo="https://images.pexels.com/photos/3036882/pexels-photo-3036882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          isView={isView}
        />
      </div>
      {isView && (
        <div className={styles.productDetail_description}>
          <h4>Descripción del producto</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis odit
            accusamus explicabo suscipit rem repellat veritatis, non officiis!
            Vero quasi in, nam optio tempore illo neque ea distinctio ipsum
            praesentium!
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default ProductDetail;
