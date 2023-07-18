import React from 'react';
import styles from './CustomMessage.module.css';

const CustomMessage = ({ message = 'Cargando...' }) => {
  return <div className={styles.container_CustomMessage}>{message}</div>;
};

export default CustomMessage;
