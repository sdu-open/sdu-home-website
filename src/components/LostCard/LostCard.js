import React from 'react';
import Card from '../Card/Card';
import styles from './LostCard.module.css';
import LostImg from '../../img/lost.png';
import { Link } from 'react-router-dom';
const LostCard = () => {
  return (
    <Card className={styles.card}>
      <img className={styles.img} src={LostImg} alt="shop" />
      <div className={styles.cardWrapper}>
        <h3 className={styles.title}>Lost & Found</h3>
        <div className={styles.info}>
          <p className={styles.infoCount}>7</p>
          <p className={styles.infoText}>found items</p>
        </div>
        <div className={styles.info}>
          <p className={styles.infoCount}>4</p>
          <p className={styles.infoText}>lost items</p>
        </div>
        <Link className={styles.link} to="/marketplace">
          click to show more info
        </Link>
      </div>
    </Card>
  );
};

export default LostCard;
