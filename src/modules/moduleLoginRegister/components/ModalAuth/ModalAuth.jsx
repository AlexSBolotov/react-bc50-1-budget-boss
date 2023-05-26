import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  Backdrop,
  ModalBtn,
  ModalContent,
  ModalText,
} from './ModalAuth.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { refreshError } from 'redux/auth/authSlice';

const ModalAuth = ({ title, onClose }) => {
  const errorModal = useSelector(selectError);
  const dispatch = useDispatch();

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }

    if (errorModal) {
      dispatch(refreshError(null));
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }

    if (errorModal) {
      dispatch(refreshError(null));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalText>{title}</ModalText>
        <ModalBtn type="button" onClick={handleBackdropClick}>
          Ok
        </ModalBtn>
      </ModalContent>
    </Backdrop>
  );
};

export default ModalAuth;

ModalAuth.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};
