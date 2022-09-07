import React from 'react'
import styles from './Sidebar.module.css';

const Sidebar = ({className}) => {
  return <aside className={`${styles.sidebar} ${className}`}>Sidebar</aside>;
}

export default Sidebar