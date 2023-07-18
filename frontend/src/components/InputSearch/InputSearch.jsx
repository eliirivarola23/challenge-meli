import React from 'react';
import styles from './Input.module.css';
import Button from '../Button';
import { MdSearch } from 'react-icons/md';
import { useHandleInput } from './hooks/useHandleInput';

const InputSearch = ({ placeholder = 'Nunca dejes de buscar', name, label, handleChangeSearch, type, handleSubmitSearch }) => {
  const { handleChange, handleSubmit, handleKeyPress, value } = useHandleInput({ handleChangeSearch, handleSubmitSearch });

  return (
    <div className={styles.container_input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={handleKeyPress} />
      <Button variant="secondary" onClick={handleSubmit}>
        {<MdSearch />}
      </Button>
    </div>
  );
};

export default InputSearch;
