import React from 'react'

import Modal from 'react-modal-aziza'
import 'react-modal-aziza/dist/index.css'

const App = () => {
  return <Modal
    message='helloo'
    btnClose
    crossClose
    btnStyle={{ btnBackgroundColor: 'yellow', btnTextColor: '#000' }}
    modalStyle={{ modalBackground: '#000', modalTextColor: '#fff' }}
  />
}

export default App
