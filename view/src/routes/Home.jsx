import TransactionList from "../components/TransactionList.jsx";
import {Link} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

const Home = ({ transactions }) => {
    const menuRoute = '/DashBoard'
    const urlRoute = '/'
    return (
        <div>
            <Sidebar menuRoute={menuRoute} urlRoute={urlRoute}/>
            <TransactionList  transactions={transactions}/>
        </div>
    )
}

export default Home