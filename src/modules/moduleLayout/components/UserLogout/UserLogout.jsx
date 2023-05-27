import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import s from './UserLogout.module.css';
import logout from 'modules/moduleLayout/images/logout.png';
import initial from 'modules/moduleLayout/images/initial.png';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';
import { selectEmail } from 'redux/auth/authSelectors';
import { useState } from 'react';

export default function UserLogout() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const userName = useSelector(selectEmail)
    ?.match(/^([^@]+)/g)
    .join('');
  const dispatch = useDispatch();

  const userNameUpper = userName?.charAt(0).toUpperCase() + userName?.slice(1);

  const toggleModal = () => {
    setModalIsOpen(p => !p);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const userInitial = userName?.charAt(0).toUpperCase();

  return (
    <>
      <div className={s.headerBar}>
        <div className={s.initialCircle}>
          <img className={s.userInitial} src={initial} alt="Initial" />
          <p className={s.initial}>{userInitial}</p>
        </div>
        <p className={s.userName}>{userNameUpper}</p>
        <button className={s.headerExitBtn} onClick={toggleModal} type="button">
          <img
            className={s.userExitIcon}
            src={logout}
            alt="exit"
            width="16"
            height="16"
          />
          <p className={s.userExitWord}>Exit</p>
        </button>
      </div>
      {modalIsOpen && (
        <ModalConsern
          closeModal={toggleModal}
          onSubmit={handleLogout}
          title="Do you really want to leave?"
        />
      )}
    </>
  );
}
