import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import s from './UserLogout.module.css';
import logout from 'modules/moduleLayout/images/logout.png';
import initials from 'modules/moduleLayout/images/initials.png';
import ModalConcern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';

export default function UserLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className={s.headerBar}>
        <img className={s.userInitial} src={initials} alt="Initials" />
        <p className={s.userName}>User Name</p>
        <button
          className={s.headerExitBtn}
          onClick={handleLogout}
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
      <ModalConcern />
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
