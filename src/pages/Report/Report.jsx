import ReportBar from "components/ReportBar/ReportBar";
import ReportCategories from "components/ReportCategories/ReportCategories";
import ReportCharts from "components/ReportCharts/ReportCharts";
import TransactionPeriodDataTotal from "components/TransactionPeriodDataTotal/TransactionPeriodDataTotal";

const Report = () => {
    return (
        <section>
            <ReportBar/>
            <TransactionPeriodDataTotal />
            <ReportCategories />
            <ReportCharts/>
        </section>
    );
};

export default Report;