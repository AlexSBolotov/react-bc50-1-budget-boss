import ReportBar from 'modules/moduleReports/components/ReportBar/ReportBar';
import ReportCategories from 'modules/moduleReports/components/ReportCategories/ReportCategories';
import ReportGraph from 'modules/moduleReports/components/ReportGraph/ReportGraph';
import ReportTotal from 'modules/moduleReports/components/ReportTotal/ReportTotal';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import // selectPeriod,
// selectAllCategories,
'redux/transaction/transactionSelectors';
// import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import {
  getTransactionByPeriod,
  // getAllCategories,
} from 'redux/transaction/transactionOperations';
import { useLogCheck } from 'hooks/uselogCheck';

const Report = () => {
  const [objforGrph, setObjforGrph] = useState([]);
  const [flag3, setFlag3] = useState(true);
  useLogCheck();
  const dispatch = useDispatch();
  // const data = useSelector(selectPeriod);
  const totalExpenses = useSelector(
    state => state.transactions.reports.expenses.total
  );
  const totalIncomes = useSelector(
    state => state.transactions.reports.incomes.total
  );

  const handleDataChooser = data => {
    dispatch(getTransactionByPeriod(data));
  };

  const flag = v => setFlag3(!v);
  // document.classList.remove()
  const handleSelected = data => {
    setObjforGrph(data);
  };

  return (
    <section>
      <ReportBar onClick={handleDataChooser} />
      <ReportTotal data={{ totalExpenses, totalIncomes }} />
      <ReportCategories onclick={handleSelected} flag={flag} />
      <ReportGraph
        data={objforGrph}
        dataFirstRender={(totalExpenses, totalIncomes)}
        flag={flag3}
      />
    </section>
  );
};

export default Report;
