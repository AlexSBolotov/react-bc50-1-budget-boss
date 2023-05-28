import s from './BalanceModal.module.scss';

const BalanceModal = () => {
  return (
    <div className={s.fixedModal}>
      <div className={s.modalDiv}>
        <p className={s.largeText}>
          Hello! To get started, enter the current balance of your account!
        </p>
        <p className={s.littleText}>
          You can't spend money until you have it :)
        </p>
      </div>
    </div>
  );
};

export default BalanceModal;
