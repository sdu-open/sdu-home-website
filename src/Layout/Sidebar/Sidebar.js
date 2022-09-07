import React from 'react';
import styles from './Sidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import UserImg from '../../img/user.jpg';
import GoogleLogo from '../../img/logo.jpg';
import cn from 'classnames';
const Sidebar = ({ className }) => {
  const { pathname } = useLocation();
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <div className={styles.user}>
        <img className={styles.userImg} src={UserImg} alt="User" />
        {/* <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg> */}
        <h2 className={styles.userName}>Mukan Yerbolat</h2>
      </div>
      <nav>
        <Link
          className={cn(styles.navItem, {
            [styles.active]: pathname === '/',
          })}
          to="/"
        >
          Dashboard
        </Link>
        <Link
          className={cn(styles.navItem, {
            [styles.active]: pathname === '/events',
          })}
          to="/events"
        >
          Events
        </Link>
        <Link
          className={cn(styles.navItem, {
            [styles.active]: pathname === '/marketplace',
          })}
          to="/marketplace"
        >
          Marketplace
        </Link>
        <Link
          className={cn(styles.navItem, {
            [styles.active]: pathname === '/lostandfound',
          })}
          to="/lostandfound"
        >
          Lost and found
        </Link>
        <Link
          className={cn(styles.navItem, {
            [styles.active]: pathname === '/sport',
          })}
          to="/sport"
        >
          Sport
        </Link>
      </nav>
      <div className={styles.organisations}>
        <p className={styles.organisationsTitle}>Organizations</p>
        <ul className={styles.organisationsList}>
          <li className={styles.organisationsItem}>
            <img src={GoogleLogo} alt="logo" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
