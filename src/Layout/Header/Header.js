import React from 'react'
import styles from './Header.module.css'

const Header = ({className}) => {
  return (
    <header className={`${styles.header} ${className}`}>Header</header>
  )
}

export default Header