import React from 'react'
import Status from '../../components/Status/Status'
import MarketCard from '../../components/MarketCard/MarketCard'
import LostCard from '../../components/LostCard/LostCard';
import Styles from './Dashboard.module.css'
import Events from '../../components/Events/Events';
const Dashboard = () => {
  return (
    <>
      <Status />
      <Events />
      <div className={Styles.wrapper}>
        <MarketCard />
        <LostCard />
      </div>
    </>
  );
}

export default Dashboard