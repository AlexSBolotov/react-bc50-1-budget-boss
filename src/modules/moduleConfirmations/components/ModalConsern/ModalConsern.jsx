import PropTypes from 'prop-types';
import s from './ModalConsern.module.css';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const ModalConsern = ({ title, isOpen, onCancel, onSubmit }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleSubmit = () => {
    onSubmit();
  };

  const handleCancel = () => {
    setModalIsOpen(false);
    onCancel();
  };

  return (
    <>
      {modalIsOpen && (
        <div className={s.modalOverlay} onClick={handleCancel}>
          <div className={s.modalWindow}>
            <div className={s.modalClose} onClick={handleCancel}>
              <MdClose />
            </div>
            <div className={s.modalBody}>
              <p className={s.modalTitle}>{title}</p>
              <div className={s.modalBtnPosition}>
                <button
                  className={`${s.modalBtnStyle} ${s.modalBtnStyleColor}`}
                  onClick={handleSubmit}
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
      )}
    </>
  );
};

ModalConsern.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

ModalConsern.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
};

export default ModalConsern;
