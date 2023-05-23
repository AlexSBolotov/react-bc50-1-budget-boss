import AddTransaction from "components/AddTransaction/AddTransaction";
import Summary from "components/Summary/Summary";
import TransactionTypeTabs from "components/TransactionTypeTabs/TransactionTypeTabs";
import TransactionsList from "components/TransactionsList/TransactionsList";

const TransactionContainer = () => {
    return (
        <section>
            <TransactionTypeTabs />
            <AddTransaction />
            <TransactionsList />
            <Summary />
        </section>
    );
};

export default TransactionContainer;