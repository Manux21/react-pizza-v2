import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>404</h1>
      <span>Нам не удалось найти данную страницу :(</span>
    </div>
  );
};

export default NotFoundBlock;
