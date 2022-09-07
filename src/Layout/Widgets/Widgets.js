import React from 'react'
import styles from './Widgets.module.css';

const Widgets = ({className}) => {
  return <aside className={`${styles.Widgets} ${className}`}>Widgets</aside>;
}

export default Widgets