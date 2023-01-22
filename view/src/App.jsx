import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home.jsx";
import AddTransaction from "./routes/AddTransaction.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import React from 'react';
import Cookies from "js-cookie";
import MainPage from "./routes/MainPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import {makeStyles} from "@mui/material";



function App() {
  const [transactions, setTransactions] = useState([])



  const exampleWallets= [
    {
      name: "Hello",
      id: 1,
      transactionList: transactions,
      user: 1,
      balance: 2000
    }
  ]

  const [transactionTypeToDisplay, setTransactionTypesToDisplay] = useState(() =>transactions)

  const [wallets, setWallets] = useState(exampleWallets)

  const [currentWallet, setCurrentWallet] = useState(() => wallets[0])

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  const [userId, setUserId] = useState(undefined);
  useEffect(() => {
    setUserId(Cookies.get('userId'))
  }, [])
  // const userId = user.id;
  // const userId = 2;
  const walletId = currentWallet.id;
  // const walletId = currentWallet.id;

  // TODO get userId from cookies
  // dashboard -> choose which wallet
  // wallet dashboard

  const getApi = async(url, setter) => {
    let response = await fetch(url);
    let data = await response.json();
    setter([...data])
  }


  useEffect( () => {
    if (userId === undefined){
      return
    }
    getApi(`/api/wallets/user/${userId}`, setWallets).catch(console.error)
  }, [userId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/transactions`, setTransactions).catch(console.error)
  }, [walletId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/expenses`, setExpenses).catch(console.error)
  }, [walletId]);

  useEffect( () => {
    if (walletId === undefined){
      return
    }
    getApi(`/api/transactions/${walletId}/incomes`, setIncomes).catch(console.error)
  }, [walletId]);

  return (
      <Router>
        <div className="App">
          <div className="content">
            <NavigationBar wallets={wallets} setCurrentWallets={setCurrentWallet} user={userId}/>
            <Switch>
              <Route exact path="/home">
                <Home currentWallet={currentWallet} setCurrentWallets={setCurrentWallet} transactions={transactions} expenses={expenses} incomes={incomes} wallets={wallets} setTransactionTypesToDisplay={setTransactionTypesToDisplay} transactionTypeToDisplay={transactionTypeToDisplay} userId={userId}/>
              </Route>
              <Route exact path="/add">
                <AddTransaction wallets={wallets} walletId={walletId}/>
              </Route>
              <Route exact path="/Login">
                <Login/>
              </Route>
              <Route exact path="/Register">
                <Register/>
              </Route>
              <Route exact path='/'>
                <MainPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default App


