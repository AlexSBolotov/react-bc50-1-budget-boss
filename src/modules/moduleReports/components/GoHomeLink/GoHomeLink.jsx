// const GoHomeLink = () => {
//     return <span>стрілочка Main page</span>
// };

// export default GoHomeLink;

import { useLocation } from 'react-router';
import f from './GoHomeLink.module.css';

const GoHomeLink = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <div to={backLinkHref} className={f.goBackLink}>
      <span>GO BACK</span>
    </div>
  );
};

export default GoHomeLink;