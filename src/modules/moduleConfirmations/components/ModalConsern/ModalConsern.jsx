import PropTypes from 'prop-types';
import s from './ModalConsern.module.css';
import icon from '../../../shared/images/svg/close.svg';
import { useEffect } from 'react';
const ModalConsern = ({ title, closeModal, onSubmit }) => {
  const handleClick = () => {
    onSubmit();
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

  return (
    <>
      (
      <div className={s.modalOverlay} onClick={handleBackdropClick}>
        <div className={s.modalWindow}>
          <div className={s.modalClose} onClick={handleCancel}>
            <img src={icon} width="12" alt="closeicon" />
          </div>
          <div className={s.modalBody}>
            <p className={s.modalTitle}>{title}</p>
            <div className={s.modalBtnPosition}>
              <button
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
      )
    </>
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
