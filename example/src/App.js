import React, { useState } from 'react'

import Modal from 'react-modal-aziza'
import 'react-modal-aziza/dist/index.css'

const App = () => {
  const [modalDisplayed, setIsDisplayed] = useState(true)
  const toggleModal = () => setIsDisplayed(!modalDisplayed)
  return <Modal
    isOpenModal={modalDisplayed}
    onClose={toggleModal}
    message='Employee created !'
    btnClose
    btnStyle={{ btnBackgroundColor: 'yellow', btnTextColor: '#000' }}
    modalStyle={{ modalBackground: '#000', modalTextColor: '#fff' }}
  />
}

export default App
