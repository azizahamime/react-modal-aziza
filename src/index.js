import React, { Fragment } from 'react'
import { ModalContent } from './components/modal/modal.jsx'

export const Modal = () => {
  return (
    <Fragment>
      <ModalContent
        message='helloo'
        btnClose
        crossClose
      // eslint-disable-next-line prettier/prettier
      /* btnStyle={{ btnBackgroundColor: '#f2f2f2', btnTextColor: '#000' }}
    modalStyle={{ modalBackground: '#000', color: '#fff' }} */
      />
    </Fragment>
  )
}
