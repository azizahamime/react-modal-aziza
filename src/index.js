import React, { Fragment } from 'react'
import { ModalContent } from './components/modal/modal.jsx'

export const Modal = () => {
  return (
    <Fragment>
      <ModalContent
        message='helloo'
        btnClose
        crossClose
        btnStyle={{ btnBackgroundColor: 'yellow', btnTextColor: '#000' }}
        modalStyle={{ modalBackground: '#000', color: '#fff' }}
      />
    </Fragment>
  )
}
