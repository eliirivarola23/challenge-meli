import { memo } from 'react';
import CustomMessage from '../../CustomMessage';
import NoResultsView from '../../NoResultsView/NoResultsView';

const ContainerHeaderProductDetail = ({ loading, searchParams, data, children }) => {
  if (loading) return <CustomMessage />;
  if (!searchParams) return <CustomMessage message="Realiza una busqueda para poder ver resultados" />;
  if (!loading && searchParams && !data?.items?.length) return <NoResultsView />;

  return <>{children}</>;
};

export default memo(ContainerHeaderProductDetail);
