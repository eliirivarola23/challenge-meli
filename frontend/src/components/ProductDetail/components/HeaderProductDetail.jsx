import React from "react";
import styles from "../ProductDetail.module.css";
import Button from "../../Button";

export const HeaderProductDetail = ({ photo, isView, children }) => {
  return (
    <>
      <div className={styles.productDetail_photo}>
        <img src={photo} alt="imagen del producto" />
      </div>
      <div className={styles.productDetail_detail}>
        {isView && <p>Nuevo | 124 vendidos</p>}
        <h4>Deco Reverse Sombrero Oxford</h4>
        <p className={styles.productDetail_price}>$1980</p>
        {isView && <Button>Comprar</Button>}
        {children}
      </div>
    </>
  );
};
