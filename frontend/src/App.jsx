import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DashBoard from "./pages/DashBoard.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import React from 'react';
import Cookies from "js-cookie";
import MainPage from "./pages/MainPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {

    const [darkMode, setDarkMode] = useState(false)
    const [transactions, setTransactions] = useState([])

    const exampleWallets = [
        {
            name: "Hello",
            id: 1,
            transactionList: transactions,
            user: 1,
            balance: 2000
        }
    ]

    const [transactionTypeToDisplay, setTransactionTypesToDisplay] = useState(undefined);
    const [wallets, setWallets] = useState(exampleWallets);
    const [currentWallet, setCurrentWallet] = useState(() => wallets[0]);
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [userId, setUserId] = useState(undefined);

    useEffect(() => {
        setUserId(Cookies.get('userId'))
    }, []);

    const walletId = currentWallet.id;

    // TODO get userId from cookies

    const getApi = async (url, setter) => {
        let response = await fetch(url);
        let data = await response.json();
        setter([...data])
    }

    useEffect(() => {
        if (userId === undefined) {
            return
        }
        getApi(`/api/wallets/user/${userId}`, setWallets).catch(console.error)
    }, [userId]);

    useEffect(() => {
        if (walletId === undefined) {
            return
        }
        getApi(`/api/transactions/${walletId}/transactions`, setTransactions).catch(console.error)
    }, [walletId]);

    useEffect(() => {
        if (walletId === undefined) {
            return
        }
        getApi(`/api/transactions/${walletId}/expenses`, setExpenses).catch(console.error)
    }, [walletId]);

    useEffect(() => {
        if (walletId === undefined) {
            return
        }
        getApi(`/api/transactions/${walletId}/incomes`, setIncomes).catch(console.error)
    }, [walletId]);

    return (
        <Router>
            <div className="App">
                <Sidebar></Sidebar>
                <div className="content">
                    <NavigationBar className='position-relative'
                                   wallets={wallets}
                                   setCurrentWallets={setCurrentWallet}
                                   user={userId}
                                   mode={darkMode}
                                   setDarkMode={setDarkMode}/>
                    <Routes>
                        <Route exact path='/'
                               element={<MainPage/>}/>
                        <Route exact path="/home"
                               element={
                                   <DashBoard
                                       currentWallet={currentWallet}
                                       setCurrentWallets={setCurrentWallet}
                                       transactions={transactions}
                                       expenses={expenses}
                                       incomes={incomes}
                                       wallets={wallets}
                                       setTransactionTypesToDisplay={setTransactionTypesToDisplay}
                                       transactionTypeToDisplay={transactionTypeToDisplay} userId={userId}/>
                        }/>
                        <Route exact path="/add"
                               element={<AddTransaction wallets={wallets} walletId={walletId}/>}/>
                        <Route exact path="/Login"
                               element={<Login/>}/>
                        <Route exact path="/Register"
                               element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App


