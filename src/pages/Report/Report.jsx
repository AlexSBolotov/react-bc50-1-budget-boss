import ReportBar from 'modules/moduleReports/components/ReportBar/ReportBar';
import ReportCategories from 'modules/moduleReports/components/ReportCategories/ReportCategories';
import ReportGraph from 'modules/moduleReports/components/ReportGraph/ReportGraph';
import ReportTotal from 'modules/moduleReports/components/ReportTotal/ReportTotal';

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
