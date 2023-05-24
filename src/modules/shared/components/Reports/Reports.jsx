const Reports = () => {
  return (
    <div className={s.divToReports}>
      <Link to="/report" className={s.GoToReportsLink}>
        Reports
        <img src={BarChart} alt="reports" className={s.iconReport} />
      </Link>
    </div>
  );
};

export default Reports;
