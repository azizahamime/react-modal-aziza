import React, { Fragment, useState } from 'react'
import styles from './modal.css'

export const ModalContent = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(true)
  const toggleModal = () => setIsOpenModal(!isOpenModal)
  return (
    <Fragment>
      {isOpenModal && (
        <div className={styles.container}>
          <div className={styles.modal}>
            {props.crossClose && (
              <button className={styles.cross} onClick={toggleModal}>
                x
              </button>
            )}
            <p>{props.message}</p>
            {props.btnClose && (
              <button className={styles.close} onClick={toggleModal}>
                close
              </button>
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}
