import React from 'react';
import Card from '../Card/Card';
import styles from './Events.module.css';
import cn from 'classnames'
const Events = () => {
  return (
    <>
      <h3 className={styles.title}>Your events</h3>
      <Card className={styles.events}>
        <div className={`${styles.wrapper} ${styles.eventHead}`}>
          <p className={styles.eventTitle}>General Title</p>
          <p className={styles.eventDate}>date</p>
          <p className={styles.eventButtonWrapper}>cost</p>
        </div>
        <div className={`${styles.wrapper} ${styles.event}`}>
          <p className={styles.eventTitle}>Orientation Day</p>
          <p className={styles.eventDate}>hh:mm dd.mm.yyyy</p>
          <div className={styles.eventButtonWrapper}>
            <button className={cn(styles.eventButton, {
              [styles.price]: true
            })}>300 〒</button>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles.event}`}>
          <p className={styles.eventTitle}>Mountain King’s event</p>
          <p className={styles.eventDate}>08:00PM 10.09.2022</p>
          <div className={styles.eventButtonWrapper}>
            <button className={cn(styles.eventButton, {
              [styles.free]: true
            })}>free</button>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles.event}`}>
          <p className={styles.eventTitle}>Hackathon to Engineering Faculty</p>
          <p className={styles.eventDate}>08:00PM 10.09.2022</p>
          <div className={styles.eventButtonWrapper}>
            <button className={cn(styles.eventButton, {
              [styles.paid]: true
            })}>paid</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Events;
