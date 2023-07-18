import React, { memo } from 'react';
import styles from '../ProductDetail.module.css';
import Button from '../../Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';

const HeaderProductDetail = ({ customStyles, photo, id, sold_quantity, condition, price, title = '', isView, children }) => {
  const navigate = useNavigate();
  const locations = useLocation();

  const handleNavigate = () => {
    if (locations.pathname !== PublicRoutes.LIST_OF_PRODUCTS) return;
    navigate(`${PublicRoutes.PRODUCT_DETAIL}${id}`, { state: { ...locations, label: 'Volver al Listado' } });
  };

  return (
    <>
      <div className={`${customStyles || styles.productDetail_photo}`} onClick={handleNavigate}>
        <img src={photo} alt={`imagen de ${title}`} />
      </div>
      <div className={styles.productDetail_detail}>
        {isView && (
          <p>
            {' '}
            {condition === 'new' ? 'Nuevo' : 'Usado'} | {sold_quantity && `${sold_quantity} vendidos`}
          </p>
        )}
        {!isView && price.decimals && (
          <p className={styles.productDetail_price} onClick={handleNavigate}>
            ${price.decimals}
          </p>
        )}
        <h4 onClick={handleNavigate}>{title}</h4>

        {isView && price.decimals && (
          <p className={styles.productDetail_price} onClick={handleNavigate}>
            ${price.decimals}
          </p>
        )}
        {isView && <Button>Comprar</Button>}
        {children}
      </div>
    </>
  );
};

export default memo(HeaderProductDetail);
