import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import styles from "./Menu.module.css";
import Logo from "../../assets/logomeli.png";

const MenuHeader = ({ customFilters, children }) => {
  return (
    <div className={styles.container_menu}>
      <img src={Logo} alt="logo" />
      <div className={styles.container_menu_filters}>
        {customFilters}
        <InputSearch type="search" />
      </div>
      {children}
    </div>
  );
};
export default MenuHeader;
