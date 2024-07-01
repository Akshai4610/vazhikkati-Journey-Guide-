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
  
    // return () => {
    //   second
    // }
  }, [open])  //dependence 'depend on component' execute again when it update.
  

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
