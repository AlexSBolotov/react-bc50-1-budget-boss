import { useLocation } from 'react-router';
import f from './GoHomeLink.module.css';

const GoHomeLink = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <div to={backLinkHref} className={f.goBackLink}>
      <span> {'<--'} Main Page</span>
    </div>
  );
};

export default GoHomeLink;
