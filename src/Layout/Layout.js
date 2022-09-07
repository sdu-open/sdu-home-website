import React from 'react'
import Header from './Header/Header'
import styles from './Layout.module.css'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'
const Layout = ({children}) => {
  return (
    <>
      <div className={styles.layout}>
        <Sidebar className={styles.sidebar} />
        <Header className={styles.header} />
        <Widgets className={styles.widgets} />
      </div>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout