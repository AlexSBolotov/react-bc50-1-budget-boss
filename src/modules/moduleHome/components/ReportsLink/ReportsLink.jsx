import svgDiagram from '../../../shared/images/svg/diagram.svg'
import s from './ReportsLink.module.scss';

const ReportsLink = () => {

  return (
    <div to="/report">
      <span className={s.reports} width='24px' height='24px'>
        Reports
        <img src={svgDiagram} alt="Diagram" />
      </span>
    </div>
  );
};

export default ReportsLink;
