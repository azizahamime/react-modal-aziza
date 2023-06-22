import React, { Fragment } from 'react'
import { ModalContent } from './components/modal/modal.jsx'

export const Modal = () => {
  return (
    <Fragment>
      <ModalContent message='helloo' btnClose crossClose />
    </Fragment>
  )
}
