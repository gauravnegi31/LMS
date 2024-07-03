import React from 'react'
import Backdrop from './Backdrop'
import Prompt from './Prompt'
import { createPortal } from 'react-dom'

const Modal = ({toggle}) => {
  return (
    <div>
       {createPortal(<Backdrop toggle={toggle}/>, document.getElementById("Backdrop"))}
       {createPortal(<Prompt/>, document.getElementById("Prompt"))}
    </div>
  )
}

export default Modal
