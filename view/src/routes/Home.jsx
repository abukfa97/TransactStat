import TransactionList from "../components/TransactionList.jsx";
import {Link} from "react-router-dom";

const Home = ({ transactions }) => {
    return (
        <div>
            <TransactionList  transactions={transactions}/>
            <Link to="/add">Add Transaction</Link>
        </div>
    )
}

export default Home