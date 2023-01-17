import TransactionList from "../components/TransactionList.jsx";
import Sidebar from "../components/Sidebar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ transactions }) => {
    const menuRoute = '/DashBoard'
    const urlRoute = '/'
    return (
        <div>
            <Sidebar menuRoute={menuRoute} urlRoute={urlRoute}/>
            <div className="monthly-container">
                <h3 className="this-month">This Month</h3>
                <div className="expenses-and-incomes">
                    <TransactionList  transactions={transactions} isMain={false} title="Expenses"/>
                    <TransactionList  transactions={transactions} isMain={false} title="Incomes"/>
                </div>

            </div>
            <div className="width-80">
            <TransactionList  transactions={transactions} isMain={true} title="AllTransactions"/>
            </div>
        </div>
    )
}

export default Home