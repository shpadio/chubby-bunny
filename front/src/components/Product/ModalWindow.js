import ReactModal from 'react-modal';
import React from 'react';
import './ModalWindow.css';

function ModalWindow({
  open, setOpen, handleClickToStay, handleClickToBuy
}) {
  return (
    <ReactModal
      isOpen={open}
      contentLabel="Minimal Modal Example"
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={() => setOpen(false)}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a className="waves-effect blue lighten-4 btn" style={{ marginTop: '5px', marginBottom: '5px', color: '#435467' }} onClick={handleClickToBuy}>Перейти в корзину</a>
        <a className="waves-effect blue lighten-4 btn" style={{ marginTop: '5px', marginBottom: '5px', color: '#435467' }} onClick={handleClickToStay}>Продолжить покупки</a>
      </div>
    </ReactModal>
  );
}

export default ModalWindow;
