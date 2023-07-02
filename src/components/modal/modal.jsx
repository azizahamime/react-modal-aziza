import React, { Fragment } from 'react'
import styles from './modal.css'

export const Modal = (props) => {
  const {
    isOpenModal = false,
    onClose,
    message,
    btnClose,
    btnStyle = { btnBackgroundColor: 'black', btnTextColor: 'white' },
    modalStyle = { modalBackground: '#f2f2f2', modalTextColor: 'black' }
  } = props
  const { btnBackgroundColor, btnTextColor } = btnStyle
  const { modalBackground, modalTextColor } = modalStyle

  // const [isOpenModal, setIsOpenModal] = useState(true)
  // const toggleModal = () => setIsOpenModal(!isOpenModal)

  return (
    <Fragment>
      {isOpenModal && (
        <div className={styles.container}>
          <div
            className={styles.modal}
            style={{
              backgroundColor: modalBackground || 'white',
              color: modalTextColor || 'black'
            }}
          >
            <button
              className={styles.cross}
              onClick={onClose}
              style={{
                backgroundColor: btnBackgroundColor || 'black',
                color: btnTextColor || 'white'
              }}
            >
              x
            </button>

            <p>{message || 'Employee created !!'}</p>
            {btnClose && (
              <button
                className={styles.close}
                onClick={onClose}
                style={{
                  backgroundColor: btnBackgroundColor || 'black',
                  color: btnTextColor || 'white'
                }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </Fragment>
  )
}
