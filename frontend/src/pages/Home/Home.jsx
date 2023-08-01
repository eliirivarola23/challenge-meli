import { useSEOHeadData } from '../../hooks/useSEOHeadData';

const Home = () => {
  useSEOHeadData({ title: 'Home' });

  return <div style={{ textAlign: 'center', padding: '16px' }}>Realiza una busqueda para poder ver resultados</div>;
};

export default Home;
