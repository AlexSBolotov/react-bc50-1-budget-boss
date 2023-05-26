import ReportBar from 'modules/moduleReports/components/ReportBar/ReportBar';
import ReportCategories from 'modules/moduleReports/components/ReportCategories/ReportCategories';
import ReportGraph from 'modules/moduleReports/components/ReportGraph/ReportGraph';
import ReportTotal from 'modules/moduleReports/components/ReportTotal/ReportTotal';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import {
  selectPeriod,
  // selectAllCategories,
} from 'redux/transaction/transactionSelectors';
// import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import {
  getTransactionByPeriod,
  // getAllCategories,
} from 'redux/transaction/transactionOperations';
import { useLogCheck } from 'hooks/uselogCheck';

const Report = () => {
  const [objforGrph, setObjforGrph] = useState([]);
  useLogCheck();
  const dispatch = useDispatch();
  const data = useSelector(selectPeriod);

  const handleDataChooser = data => dispatch(getTransactionByPeriod(data));
  const handleSelected = data => setObjforGrph(data);
  const fetchedData = useMemo(() => {
    return data;
  }, [data]);

  return (
    <section>
      <ReportBar onClick={handleDataChooser} />
      <ReportTotal data={fetchedData} />
      <ReportCategories onclick={handleSelected} />
      <ReportGraph data={objforGrph} />
    </section>
  );
};

export default Report;
