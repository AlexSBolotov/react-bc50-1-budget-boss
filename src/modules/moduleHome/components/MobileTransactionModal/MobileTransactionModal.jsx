import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import icon from '../../../shared/images/svg/close.svg';
import s from '../../components/MobileTransactionModal/MobileTransactionModal.module.scss';
import TransactionForm from '../TransactionForm/TransactionForm';

const MobileTransactionModal = ({ onClose, selectedDate }) => {
  const modalRoot = document.querySelector('#modal-root');
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <div onClick={handleBackdropClick} className={s.backdrop}>
      <div className={s.modalWindow}>
        <button onClick={onClose} className={s.button}>
          <img src={icon} width="12" alt="closeicon" />
        </button>
        <TransactionForm selectedDate={selectedDate} />
      </div>
    </div>,
    modalRoot
  );
};

export default MobileTransactionModal;

MobileTransactionModal.propTypes = {
  onClose: PropTypes.func,
};
