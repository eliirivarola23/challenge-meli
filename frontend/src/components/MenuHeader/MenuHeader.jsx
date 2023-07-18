import React, { memo } from 'react';
import InputSearch from '../InputSearch/InputSearch';
import styles from './Menu.module.css';
import Logo from '../../assets/logomeli.png';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../models/routes';

const MenuHeader = ({ customFilters, isSearch = true, handleChangeSearch, handleSubmitSearch, children }) => {
  return (
    <div className={styles.container_menu}>
      <Link to={PublicRoutes.HOME}>
        <img src={Logo} alt="logo" />
      </Link>
      <div className={styles.container_menu_filters}>
        {customFilters}
        {isSearch && <InputSearch type="search" name="search" handleChangeSearch={handleChangeSearch} handleSubmitSearch={handleSubmitSearch} />}
      </div>
      {children}
    </div>
  );
};
export default memo(MenuHeader);
