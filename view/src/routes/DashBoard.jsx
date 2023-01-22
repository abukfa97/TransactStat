import TransactionList from "../components/TransactionList.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.jsx";
import Button from '@mui/material/Button';
import MainPage from "./MainPage.jsx";
import {Box, Grid, makeStyles, Paper, Typography} from "@mui/material";
import {useState} from "react";
import Header from "../components/Header.jsx";
import {Link} from "react-router-dom";
import {LibraryAdd} from "@mui/icons-material";


const DashBoard = ({ transactions, wallets, expenses, incomes, setTransactionTypesToDisplay, transactionTypeToDisplay, setCurrentWallets, userId, currentWallet}) => {
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
                <Box style={{ margin: '50px'}}>
                    <Header  title='Dashboard' subtitles={`Welcome, ${userId}`}></Header>
                </Box>

                {/*FIRST ROW*/}
                <Box m={5}
                    display='grid'
                    gridTemplateColumns='repeat(12, 1fr)'
                    gridAutoRows='140px'
                    gap='20px'>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center'></Box>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center'></Box>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center'></Box>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center' justify-content='center' style={{ flexDirection: 'column'}}>
                        <Link style={{color: 'white', margin: 'auto', textAlign: 'center'}} to="/add">
                            <LibraryAdd style={{ marginRight : '5px', color : 'white'}}></LibraryAdd><div>Add New Transaction</div></Link>
                    </Box>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center'></Box>
                    <Box gridColumn='span 2' backgroundColor='#232f2f' display='flex' align-items='center'></Box>
                </Box>
                {/*SECOND ROW*/}
                <Box
                    display='grid'
                    gridTemplateColumns='repeat(12, 1fr)'
                    gridAutoRows='425px'
                    gap='20px'
                m={5}>
                    <Box gridColumn='span 8' backgroundColor='#232f2f' >

                    </Box>
                    <Box gridColumn='span 4' backgroundColor='#232f2f' display='flex' align-items='center' justify-content='center' >
                        <TransactionList transactionType='transactions' transactionTypeToDisplay={transactionTypeToDisplay} setTransactionTypeToDisplay={setTransactionTypesToDisplay} transactions={transactions} isMain={true} title="AllTransactions" expenses={expenses} incomes={incomes} className='transaction-list'/>
                    </Box>
                </Box>
                <Box style={{ margin: '50px'}}>
                    <Header  title='This month'></Header>
                </Box>
                {/*THIRD ROW*/}
                <Box m={5}
                    display='grid'
                    gridTemplateColumns='repeat(12, 1fr)'
                    gridAutoRows='350px'
                    gap='20px'>
                    <Box gridColumn='span 4' backgroundColor='#232f2f' display='flex' align-items='center' justify-content='center' >
                        <TransactionList transactionType='incomes'  transactions={incomes} isMain={false} title="Incomes"/>
                    </Box>
                    <Box gridColumn='span 4' backgroundColor='#232f2f' display='flex' align-items='center'>
                        <TransactionList transactionType='expenses'  transactions={expenses} isMain={false} title="Incomes"/>
                    </Box>
                    <Box gridColumn='span 4' backgroundColor='#232f2f' display='flex' align-items='center'>
                        <Box style={{margin: "50px"}}>
                        <Typography color='white'>
                            This month you spent 15 Euros less compared to last month. Good Job. Also, if you keep spending like this we estimate you will spend 50 pounds less compared to last month.
                        </Typography>
                        </Box>
                    </Box>
                </Box>
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

export default DashBoard