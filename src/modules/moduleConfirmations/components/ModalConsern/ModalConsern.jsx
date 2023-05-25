import PropTypes from 'prop-types';
import s from './ModalConsern.module.css';

const ModalConsern = (title, isOpen, onCancel, onSubmit) => {
  return (
    <>
      {isOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modalWindow}>
            <div className={s.modalBody}>
              <p className={s.modalTitle}>{title}</p>
              <div className={s.modalBtnPosition}>
                <button className={s.modalBtnStyle} onClick={onSubmit}>
                  YES
                </button>
                <button className={s.modalBtnStyle} onClick={onCancel} invert>
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
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};
ModalConsern.defaultProps = {
  title: '',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
};
export default ModalConsern;
