import TransactionList from "../components/TransactionList.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.jsx";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const HomeNoUser = ({ transactions, wallets, expenses, incomes, setTransactionTypesToDisplay, transactionTypeToDisplay, setCurrentWallets, userId}) => {
    const menuRoute = '/Home'
    const urlRoute = '/'
    return (
        <div>
            <NavigationBar menuRoute={menuRoute} urlRoute={urlRoute} wallets={wallets} setCurrentWallets={setCurrentWallets}/>
            <Typography>Please
                <Link to="/login"> Log In </Link> or
                <Link to="/register"> Sign Up </Link>
                to see more content!</Typography>
        </div>
    )
}

export default HomeNoUser