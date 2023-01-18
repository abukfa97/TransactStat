import TransactionList from "../components/TransactionList.jsx";
import Sidebar from "../components/Sidebar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ transactions, wallets, expenses, incomes, setTransactionTypesToDisplay, transactionTypeToDisplay, setCurrentWallet}) => {
    const menuRoute = '/DashBoard'
    const urlRoute = '/'
    return (
        <div>
            <Sidebar menuRoute={menuRoute} urlRoute={urlRoute} wallets={wallets} setCurrentWallets={setCurrentWallet}/>
            <div className="monthly-container">
                <h3 className="this-month">This Month</h3>
                <div className="expenses-and-incomes">
                    <TransactionList  transactions={transactions} isMain={false} title="Expenses"/>
                    <TransactionList  transactions={transactions} isMain={false} title="Incomes"/>
                </div>

            </div>
            <div className="width-80">
            <TransactionList transactionTypeToDisplay={transactionTypeToDisplay} setTransactionTypeToDisplay={setTransactionTypesToDisplay} transactions={transactions} isMain={true} title="AllTransactions" expenses={expenses} incomes={incomes}/>
            </div>
        </div>
    )
}

export default Home