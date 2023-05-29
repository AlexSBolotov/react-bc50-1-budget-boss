import s from './MainContainer.module.css';

export default function MainContainer({ children }) {
  return <main className={s.container}>{children}</main>;
}
