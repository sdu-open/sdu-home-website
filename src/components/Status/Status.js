import React from 'react';
import Card from '../Card/Card';
import styles from './Status.module.css';
import StatusImg from '../../img/status.png'
const Status = () => {
  return (
    <Card className={styles.status}>
      <img src={StatusImg} alt="status" />
      <div className={styles.wrapper}>
        <p className={styles.statusInfo}>
          status
        </p>
        <p className={styles.statusText}>
          Admin
        </p>
      </div>
    </Card>
  );
};

export default Status;
