import React from 'react';
import Card from '../Card/Card';
import styles from './MarketCard.module.css';
import ShopImg from '../../img/shop.png';
import { Link } from 'react-router-dom';
const MarketCard = () => {
  return (
    <Card className={styles.card}>
      <img className={styles.img} src={ShopImg} alt="shop" />
      <div className={styles.cardWrapper}>
        <h3 className={styles.title}>Marketplace</h3>
        <div className={styles.info}>
          <p className={styles.infoCount}>7</p>
          <p className={styles.infoText}>purchased items</p>
        </div>
        <div className={styles.info}>
          <p className={styles.infoCount}>4</p>
          <p className={styles.infoText}>items sold</p>
        </div>
        <Link className={styles.link} to="/marketplace">click to show more info</Link>
      </div>
    </Card>
  );
};

export default MarketCard;
