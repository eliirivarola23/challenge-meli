import React, { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './Product.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductService } from '../../services/ProductService';
import CustomMessage from '../../components/CustomMessage';
import Button from '../../components/Button';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useSEOHeadData({ title: loading ? 'Cargando...' : product?.title || '' });

  useEffect(() => {
    (async () => {
      try {
        const { item } = await ProductService.searchProductDetail({ id });
        setProduct(item);
      } catch (error) {
        if (error.error === 'NotFound') setError(error.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => setProduct(null);
  }, [id]);

  return (
    <>
      {!loading && <Breadcrumb crumbs={[]} />}
      <div className={styles.container_product}>
        {loading && <CustomMessage />}
        {product && <ProductDetail isView {...product} />}
        {!product && !loading && (
          <>
            <h3> {error}</h3>
            <Button onClick={() => navigate(-1)}>Volver</Button>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
