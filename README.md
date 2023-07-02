# react-modal-aziza

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal-aziza.svg)](https://www.npmjs.com/package/react-modal-aziza) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-aziza
```
## Modal props

| Name        | type               | feature
| ----------- | ------------------ | ----------------------------      
| message     | string (optional)  | text to display on the modal          
| btnClose    | Boolean (optional) | display close button                               
| btnStyle    | Object (optional)  | style close button and cross
| modalStyle  | Object (optional)  | style the modal
| isOpenModal | boolean            | state of the modal
| onClose     | function           | function close Modal
    

## Usage
### btnStyle
* btnBackgroundColor (string): background color of the cross and close button
* btnTextColor (string): color of the text inside buttons
  
### modalStyle
* modalBackground (string): background color of the Modal
* modalTextColor(string): color of the text inside modal
  
## Exemple

```jsx
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
```

## License

MIT © [azizahamime](https://github.com/azizahamime)
