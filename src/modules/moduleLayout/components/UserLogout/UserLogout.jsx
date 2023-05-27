import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import s from './UserLogout.module.css';
import logout from 'modules/moduleLayout/images/logout.png';
import initial from 'modules/moduleLayout/images/initial.png';
// import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';

export default function UserLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const userName = 'Beduin';
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <>
      <div className={s.headerBar}>
        <div className={s.initialCircle}>
          <img className={s.userInitial} src={initial} alt="Initial" />
          <p className={s.initial}>{userInitial}</p>
        </div>
        <p className={s.userName}>{userName}</p>
        <button
          className={s.headerExitBtn}
          onClick={handleLogout}
          // onClick={() => ModalConsern({ title: 'Are you sure?' })}
          type="button"
        >
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
      <ModalConsern />
    </>
  );
}

// import { useDispatch } from 'react-redux';
// import { logoutUser } from 'redux/auth/authOperations';
// import s from './UserLogout.module.css';
// import logout from 'modules/moduleLayout/images/logout.png';
// import initials from 'modules/moduleLayout/images/initials.png';
// import ModalConcern from './ModalConcern';

// export default function UserLogout() {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <>
//       <div className={s.headerBar}>
//         <img className={s.userInitial} src={initials} alt="Initials" />
//         <p className={s.userName}>User Name</p>
//         <button
//           className={s.headerExitBtn}
//           onClick={() => ModalConcern({ title: 'Are you sure?' })}
//           type="button"
//         >
//           <img
//             className={s.userExitIcon}
//             src={logout}
//             alt="exit"
//             width="16"
//             height="16"
//           />
//           <p className={s.userExitWord}>Exit</p>
//         </button>
//       </div>
//       <ModalConcern />
//     </>
//   );
// }
