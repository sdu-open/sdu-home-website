import React from 'react'
import Header from './Header/Header'
import styles from './Layout.module.css'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'
const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Widgets className={styles.widgets} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout