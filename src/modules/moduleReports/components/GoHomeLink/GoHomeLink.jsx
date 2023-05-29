import { useLocation } from 'react-router';
import f from './GoHomeLink.module.scss';
import svgBack from '../../../shared/images/svg/backLeftArrow.svg'

const GoHomeLink = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <div to={backLinkHref} className={f.goBackLink}>
        <img src={svgBack} alt="Back" className={f.back} />
        Main Page
    </div>
  );
};

export default GoHomeLink;
