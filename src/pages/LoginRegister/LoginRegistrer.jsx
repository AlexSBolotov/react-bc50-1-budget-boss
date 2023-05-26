import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import LoginForm from 'modules/moduleLoginRegister/components/LoginForm/LoginForm';
import { useMediaQuery } from 'react-responsive';
import bgImageDesk from './images/wallet-min.png';
import bgImageDeskRetina from './images/wallet@2x-min.png';
import bgImageTab from './images/money-min.png';
import bgImageTabRetina from './images/money@2x-min.png';
import {
  AuthContainer,
  AuthImage,
} from 'pages/LoginRegister/LoginRegister.styled';
import ModalAuth from 'modules/moduleLoginRegister/components/ModalAuth/ModalAuth';

export default function LoginRegister() {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const errorModal = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  useEffect(() => {
    if (errorModal) {
      toggleModal();
    }
  }, [errorModal]);

  return (
    <AuthContainer>
      {isTablet && (
        <AuthImage>
          <picture>
            <source
              srcSet={`${bgImageDesk} 1x, ${bgImageDeskRetina} 2x`}
              width="675"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${bgImageTab} 1x, ${bgImageTabRetina} 2x`}
              width="647"
              media="(min-width: 768px)"
            />
            <img src={bgImageDesk} width="675" alt="Wallet" />
          </picture>
        </AuthImage>
      )}
      <LoginForm />
      {showModal && <ModalAuth title={errorModal} onClose={toggleModal} />}
    </AuthContainer>
  );
}
