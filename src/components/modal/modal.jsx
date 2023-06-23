import React, { Fragment, useState } from 'react'
import styles from './modal.css'

export const ModalContent = (props) => {
  const { crossClose, message, btnClose, btnStyle, modalStyle } = props
  const { btnBackgroundColor, btnTextColor } = btnStyle
  const { modalBackground, modalTextColor } = modalStyle

  const [isOpenModal, setIsOpenModal] = useState(true)
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  return (
    <Fragment>
      {isOpenModal && (
        <div className={styles.container}>
          <div
            className={styles.modal}
            style={{
              backgroundColor: modalBackground || 'black',
              color: modalTextColor || 'white'
            }}
          >
            {crossClose && (
              <button
                className={styles.cross}
                onClick={toggleModal}
                style={{
                  backgroundColor: btnBackgroundColor || 'black',
                  color: btnTextColor || 'white'
                }}
              >
                x
              </button>
            )}
            <p>{message || 'Enregistrer !!'}</p>
            {btnClose && (
              <button
                className={styles.close}
                onClick={toggleModal}
                style={{
                  backgroundColor: btnBackgroundColor || 'black',
                  color: btnTextColor || 'white'
                }}
              >
                close
              </button>
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}
