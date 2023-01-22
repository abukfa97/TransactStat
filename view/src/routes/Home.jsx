import TransactionList from "../components/TransactionList.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.jsx";
import Button from '@mui/material/Button';
import MainPage from "./MainPage.jsx";
import {Box, makeStyles, Typography} from "@mui/material";
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
            <MainPage />
        )
    }
    if (walletChosen === true){
        return (
            <div>
                <div className="toolbar-height"></div>
                <Box align="center" className="full-width">
                    {wallets.map((wallet) => (
                            <Button sx={{
                                color:'#000'
                            }} className="wallets" onClick={() => chooseWallet(wallet)}>{wallet.title}</Button>
                        ))}
                </Box>
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
        <Box m={2} pt={3} align="center">
        <Typography align="center">
            Please choose between your wallets:
            <div>
            {wallets.map((wallet) => (
                    <Button sx={{
                        color: '#000000'
                    }} onClick={() => chooseWallet(wallet)}>{wallet.title}</Button>
                ))}
            </div>

        </Typography>
        </Box>
    )


}

export default Home