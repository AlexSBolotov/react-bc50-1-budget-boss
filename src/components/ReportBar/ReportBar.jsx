import Balance from "components/Balance/Balance";
import CurrentPeriod from "components/CurrentPeriod/CurrentPeriod";
import GoHomeLink from "components/GoHomeLink/GoHomeLink";
import { NavLink } from "react-router-dom";

const ReportBar = () => {
    return (
        <section>
            <NavLink to="/home"><GoHomeLink /></NavLink>
            <Balance />
            <CurrentPeriod />
        </section>
    );
};

export default ReportBar;