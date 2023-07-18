import React, { memo } from 'react';
import styles from './ProductDetail.module.css';
import HeaderProductDetail from './components/HeaderProductDetail';

const ProductDetail = ({ isView = false, picture, description, children, ...restProps }) => {
  return (
    <div className={styles.container_productDetail}>
      <div className={styles.productDetail_container_detail}>
        <HeaderProductDetail photo={picture} isView={isView} {...restProps} />
      </div>
      {isView && description && (
        <div className={styles.productDetail_description}>
          <h4>Descripción</h4>
          <span>{description}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default memo(ProductDetail);
