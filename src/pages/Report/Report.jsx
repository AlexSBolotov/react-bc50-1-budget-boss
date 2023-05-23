import ReportBar from 'modules/moduleReport/components/ReportBar/ReportBar';
import ReportCategories from 'modules/moduleReport/components/ReportCategories/ReportCategories';
import ReportGraph from 'modules/moduleReport/components/ReportGraph/ReportGraph';
import ReportTotal from 'modules/moduleReport/components/ReportTotal/ReportTotal';

const Report = () => {
  return (
    <section>
      <ReportBar />
      <ReportTotal />
      <ReportCategories />
      <ReportGraph />
    </section>
  );
};

export default Report;
