import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Header.module.css';

const Header = ({ className }) => {
  return (
    <Card className={`${styles.header} ${className}`}>
      <h1 className={styles.headerTitle}>Dashboard</h1>
      <button className={styles.headerButton}>Log out</button>
    </Card>
  );
};

export default Header;
