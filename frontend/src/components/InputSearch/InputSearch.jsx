import React from "react";
import styles from "./Input.module.css";
import Button from "../Button";
import { MdSearch } from "react-icons/md";

const InputSearch = ({
  value,
  placeholder = "Nunca dejes de buscar",
  name,
  label,
  onChange,
  type,
}) => {
  return (
    <div className={styles.container_input}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "search" && <Button>{<MdSearch/>}</Button>}
    </div>
  );
};

export default InputSearch;
