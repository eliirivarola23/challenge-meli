import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderProductDetail from '../ProductDetail/components/HeaderProductDetail';
import { ProductService } from '../../services/ProductService';
import Breadcrumb from '../Breadcrumb';
import { PublicRoutes } from '../../models/routes';
import styles from './List.module.css';
import { useSEOHeadData } from '../../hooks/useSEOHeadData';
import ContainerHeaderProductDetail from './components/ContainerHeaderProductDetail';
import CustomMessage from '../CustomMessage';

const List = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search)).search?.replace('=', ''), [location.search]);
  useSEOHeadData({ title: loading ? 'Cargando...' : searchParams?.trim() });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const cleanLookupValue = searchParams?.trim();
        const res = await ProductService.searchProducts({ q: cleanLookupValue });
        setData(res);
      } catch (error) {
        setError('Hubo un error al realizar la búsqueda, intenta nuevamente');
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      setData([]);
      setError('');
    };
  }, [searchParams]);

  const categories = useMemo(
    () =>
      data?.categories?.map(category => ({
        path: `${PublicRoutes.LIST_OF_PRODUCTS}?search=${new URLSearchParams(category)}`,
        label: category,
      })) || [],
    [data?.categories]
  );

  if (error) return <CustomMessage message={error} />;

  return (
    <>
      {!loading && <Breadcrumb crumbs={categories} />}
      <div className={styles.container_principal_list}>
        <div className={styles.container_list}>
          <ContainerHeaderProductDetail loading={loading} searchParams={searchParams} data={data}>
            {data?.items?.map(({ picture, title, price, id, free_shipping }) => (
              <div className={styles.container_item_list} key={id}>
                <HeaderProductDetail customStyles={styles.container_item} free_shipping={free_shipping} photo={picture} title={title} price={price} id={id} />
              </div>
            ))}
          </ContainerHeaderProductDetail>
        </div>
      </div>
    </>
  );
};

export default List;
