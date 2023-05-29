import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './ModalConsern.module.css';
import icon from '../../../shared/images/svg/close.svg';
import { useEffect } from 'react';

const ModalConsern = ({ title, closeModal, onSubmit }) => {
  const modalRoot = document.querySelector('#modal-root');

  const handleClick = () => {
	  onSubmit();
	  closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <>
      <div className={s.modalOverlay} onClick={handleBackdropClick}>
        <div className={s.modalWindow}>
          <div className={s.modalClose} onClick={handleCancel}>
            <img src={icon} width="12" alt="closeicon" />
          </div>
          <div className={s.modalBody}>
            <p className={s.modalTitle}>{title}</p>
            <div className={s.modalBtnPosition}>
              <button
                type="button"
                className={`${s.modalBtnStyle} ${s.modalBtnStyleColor}`}
                onClick={handleClick}
              >
                YES
              </button>
              <button className={s.modalBtnStyle} onClick={handleCancel}>
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

ModalConsern.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

ModalConsern.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
};

export default ModalConsern;
