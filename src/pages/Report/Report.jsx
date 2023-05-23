import ReportBar from 'components/ReportBar/ReportBar';
import ReportCategories from 'components/ReportCategories/ReportCategories';
import ReportGraph from 'components/ReportGraph/ReportGraph';
import ReportTotal from 'components/ReportTotal/ReportTotal';

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
