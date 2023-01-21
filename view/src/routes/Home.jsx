import TransactionList from "../components/TransactionList.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.jsx";
import Button from '@mui/material/Button';
import HomeNoUser from "./HomeNoUser.jsx";
import {Typography} from "@mui/material";
import {useState} from "react";

const Home = ({ transactions, wallets, expenses, incomes, setTransactionTypesToDisplay, transactionTypeToDisplay, setCurrentWallets, userId, currentWallet}) => {
    const menuRoute = '/DashBoard'
    const urlRoute = '/'
    console.log("Current Wallet: " + currentWallet)
    console.log("Wallets: " + wallets[0])

    const [walletChosen, setWalletChosen] = useState(false);

    const chooseWallet = (walletToDisplay) => {
        setCurrentWallets(walletToDisplay)
        setWalletChosen(true);
    }


    if (userId === undefined){
        return (
            <HomeNoUser />
        )
    }
    if (walletChosen === true){
        return (
            <div>

                <div className="monthly-container">
                    <h3 className="this-month">This Month</h3>
                    <div className="expenses-and-incomes">
                        <TransactionList  transactions={expenses} isMain={false} title="Expenses"/>
                        <TransactionList  transactions={incomes} isMain={false} title="Incomes"/>
                    </div>

                </div>
                <div className="width-80">
                    <TransactionList transactionTypeToDisplay={transactionTypeToDisplay} setTransactionTypeToDisplay={setTransactionTypesToDisplay} transactions={transactions} isMain={true} title="AllTransactions" expenses={expenses} incomes={incomes}/>
                </div>
            </div>
        )
    }
    return (
        <Typography>
            Please choose between your wallets:
            {wallets.map((wallet) => (
                <div>
                    <Button onClick={() => chooseWallet(wallet)}>{wallet.title}</Button>
                </div>))}
        </Typography>
    )


}

export default Home