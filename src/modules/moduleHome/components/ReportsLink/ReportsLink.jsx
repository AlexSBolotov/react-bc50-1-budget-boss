import svgDiagram from '../../../shared/images/svg/diagram.svg'
import s from './ReportsLink.module.css';

const ReportsLink = () => {
  return (
    <div to="/report" className={s.reports}>
      Reports
      <img src={svgDiagram} alt="Diagram"  />
    </div>
  );
};

export default ReportsLink;
