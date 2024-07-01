import {useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    }else{
      dialog.current.close();
    }
  }, [open])  //dependence (here its a value) 'depend on component' execute again when it update.
  

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null }
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
