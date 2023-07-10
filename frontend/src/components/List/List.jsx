import React from "react";
import { HeaderProductDetail } from "../ProductDetail/components/HeaderProductDetail";
import MenuHeader from "../MenuHeader/MenuHeader";
import styles from "./List.module.css";

const List = () => {
  return (
    <>
      <MenuHeader />
      <div className={styles.container_list}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index}>
            <HeaderProductDetail photo="https://images.pexels.com/photos/3036882/pexels-photo-3036882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
