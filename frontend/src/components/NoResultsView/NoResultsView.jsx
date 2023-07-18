import Search from '../../assets/search.svg';
import styles from './NoResultsView.module.css';

const NoResultsView = () => {
  return (
    <div className={styles.container_NoResultsView}>
      <img src={Search} alt="icono de busqueda" />
      <div className={styles.container_item_NoResultsView}>
        <h3>No hay publicaciones que coincidan con tu búsqueda</h3>
        <ul>
          <li>
            <strong>Revisá la ortografía</strong> de la palabra.
          </li>
          <li>
            Utilizá <strong>palabras más genéricas</strong> o menos palabras.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NoResultsView;
