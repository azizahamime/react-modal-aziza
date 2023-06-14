import React from 'react'
import styles from './modal.css'

export const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.cross}> x </button>
        <p> hello from modal </p>
        <button className={styles.close}> close</button>
      </div>
    </div>
  )
}
