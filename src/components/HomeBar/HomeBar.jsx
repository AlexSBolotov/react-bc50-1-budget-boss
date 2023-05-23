import Balance from "components/Balance/Balance";
import ReportsLink from "components/ReportsLink/ReportsLink";
import { NavLink } from "react-router-dom";

const HomeBar = () => {
    return (
        <section>
            <Balance />
            <NavLink to="/reports"><ReportsLink /></NavLink>
        </section>
    );
};

export default HomeBar;