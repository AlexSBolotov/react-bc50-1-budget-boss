import ReportBar from 'modules/moduleReports/components/ReportBar/ReportBar';
import ReportCategories from 'modules/moduleReports/components/ReportCategories/ReportCategories';
import ReportGraph from 'modules/moduleReports/components/ReportGraph/ReportGraph';
import ReportTotal from 'modules/moduleReports/components/ReportTotal/ReportTotal';
import LoginForm from 'modules/moduleLoginRegister/components/LoginForm/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { selectPeriod } from 'redux/transaction/transactionSelectors';
// import { getTransactionPeriod } from 'redux/reports/reportsOperations';
import { getTransactionByPeriod } from 'redux/transaction/transactionOperations';
import { useLogCheck } from 'hooks/uselogCheck';

const Report = () => {
  useLogCheck();
  const dispatch = useDispatch();
  const data = useSelector(selectPeriod);

  useEffect(() => {
    dispatch(getTransactionByPeriod('2023-05'));
  }, [dispatch]);

  const fetchedData = useMemo(() => {
    return data;
  }, [data]);

  return (
    <section>
      <ReportBar />
      <ReportTotal data={fetchedData} />
      <ReportCategories />
      <ReportGraph />
      <LoginForm /> {/* Временное решение */}
    </section>
  );
};

export default Report;
