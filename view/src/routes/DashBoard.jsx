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
import {Link, useHistory} from "react-router-dom";
import {LibraryAdd} from "@mui/icons-material";
import {alignPropType} from "react-bootstrap/types";
import WalletIcon from '@mui/icons-material/Wallet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const DashBoard = ({ transactions, wallets, expenses, incomes, setTransactionTypesToDisplay, transactionTypeToDisplay, setCurrentWallets, userId, currentWallet}) => {
    const menuRoute = '/DashBoard'
    const urlRoute = '/'
    console.log("Current Wallet: " + currentWallet)
    console.log("Wallets: " + wallets[0])

    const [walletChosen, setWalletChosen] = useState(false);
    let history = useHistory()

    const chooseWallet = (walletToDisplay) => {
        setCurrentWallets(walletToDisplay)
        setWalletChosen(true);
    }

    if (userId === undefined){
        history.push('/')
    }

    if (walletChosen === true){
        return (

            <div>
                        <div className="toolbar-height"></div>
                <Box style={{ margin: '50px'}}>
                    <Header  title={`Dashboard - ${currentWallet.title} `} subtitles={`Welcome, ${userId}`} titleSize='large'></Header>
                </Box>

                {/*FIRST ROW*/}
                <Box m={5}
                    display='grid'
                    gridTemplateColumns='repeat(12, 1fr)'
                    gridAutoRows='140px'
                    gap='20px'>
                    <Box sx={{ borderRadius: '7px'}}  gridColumn='span 2' backgroundColor='#501a66' display='flex' align-items='center'>
                        <Typography style={{ margin: 'auto', textAlign: 'center', color: 'white', fontSize: '0.85rem'}}>Current Balance:<div style={{ fontSize: '1.5rem'}}>350,040 HUF</div></Typography>
                    </Box>
                    <Box className='hover8' sx={{ borderRadius: '7px' }} gridColumn='span 2' backgroundColor='#281f43' display='flex' align-items='center'  justify-content='center' style={{ flexDirection: 'column'}}>
                        <Link style={{color: 'white', margin: 'auto', textAlign: 'center'}} to="/add">
                            <LibraryAdd style={{ marginRight : '5px', color : 'white'}}></LibraryAdd><div>Add New Transaction</div></Link>
                    </Box>
                    <Box sx={{ borderRadius: '7px', flexDirection: 'row' }} gridColumn='span 2' backgroundColor='#281f43' display='flex'>
                        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column'}}>
                            {wallets.slice(0,2).map((wallet) => (
                                <Button className='hover8' variant='text' sx={{
                                    color: '#ffffff'
                                }} onClick={() => chooseWallet(wallet)}><WalletIcon style={{marginRight: '7px'}}></WalletIcon>{wallet.title}</Button>
                            ))}
                        </div>
                        <div style={{margin: "auto", color: "white" }}>
                            <DataUsageIcon style={{ height: '4rem', width: '4rem'}}></DataUsageIcon>
                        </div>
                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 2' backgroundColor='#281f43' display='flex' align-items='center' >
                        <Link style={{margin: 'auto', fontSize: '1rem', color:'white', textAlign:'center'}} to='/transactions'>
                            <CategoryIcon style={{ marginRight:'5px'}}></CategoryIcon> Most Expensive Categories
                        </Link>
                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 2' backgroundColor='#281f43' display='flex' align-items='center' justify-content='center' style={{ flexDirection: 'column'}}>
                        <Typography style={{margin: 'auto', fontSize: '0.85rem', color:'white', textAlign:'center'}}>
                            Cash-flow this month: <div style={{ fontSize: '1.2rem' }}>120,000 HUF</div>
                        </Typography>
                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 2' backgroundColor='#281f43' display='flex' align-items='center'>
                        <Typography style={{margin: 'auto', fontSize: '1.2rem', color:'white', textAlign:'center', fontWeight: 'bold'}}>
                            Manage <br/> Goals <EmojiNatureIcon style={{marginLeft: '5px'}}></EmojiNatureIcon>
                        </Typography>
                    </Box>

                {/*SECOND ROW*/}

                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 7' gridRow='span 3' backgroundColor='#281f43' >

                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 5' gridRow='span 3' backgroundColor='#281f43' display='flex' align-items='center' justify-content='center' overflow='auto'>
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
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 4' backgroundColor='#281f43' display='flex' flexDirection='column' alignItems='center' overflow='auto'>
                        <p style={{ color: '#727272', marginTop: '2%'}}  color='#727272' >JANUARY INCOMES</p>
                        <TransactionList transactionType='incomes'  transactions={incomes} isMain={false} title="Incomes"/>
                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 4' backgroundColor='#281f43' display='flex' flexDirection='column' alignItems='center' overflow='auto'>
                        <p style={{ color: '#727272', marginTop: '2%'}} >JANUARY EXPENSES</p>
                        <TransactionList transactionType='expenses'  transactions={expenses} isMain={false}   title="Incomes"/>
                    </Box>
                    <Box sx={{ borderRadius: '7px' }} gridColumn='span 4' backgroundColor='#281f43' display='flex' flexDirection='column' align-items='center'>
                        <Box style={{margin: "50px"}}>
                        <p style={{ color: 'white'}}>
                            This month you spent 15 Euros less compared to last month. Good Job. Also, if you keep spending like this we estimate you will spend 50 pounds less compared to last month.
                        </p>
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
                    <Button variant='text' sx={{
                        color: '#000000'
                    }} onClick={() => chooseWallet(wallet)}>{wallet.title}</Button>
                ))}
            </div>

        </Typography>
        </Box>
    )


}

export default DashBoard