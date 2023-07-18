import React, { memo } from 'react';
import styles from './ProductDetail.module.css';
import HeaderProductDetail from './components/HeaderProductDetail';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ isView = false, picture, description, children, ...restProps }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container_productDetail}>
      <div className={styles.productDetail_container_detail}>
        <HeaderProductDetail photo={picture} isView={isView} {...restProps} />
      </div>
      {isView && description && (
        <div className={styles.productDetail_description}>
          <h5>Descripción</h5>
          <span>{description}</span>
        </div>
      )}

      {children}
      <div className={styles.container_productDetail_button}>
        <Button onClick={() => navigate(-1)}>Volver</Button>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
