import './App.css'
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home.jsx";
import AddTransaction from "./routes/AddTransaction.jsx";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Cookies from "js-cookie";


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

  const [transactionTypeToDisplay, setTransactionTypesToDisplay] = useState([])

  const [wallets, setWallets] = useState(exampleWallets)

  const [currentWallet, setCurrentWallet] = useState(wallets[0])

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  // const user = Cookies.get('user');
  // const userId = user.id;
  const userId = 1;
  const walletId = 1;
  // const walletId = currentWallet.id;

  const getApi = async(url, setter) => {
    let response = await fetch(url);
    let data = await response.json();
    setter([...data])
  }


  // useEffect( () => {
  //   getApi(`/api/wallets/${userId}/`, setWallets).catch(console.error)
  // }, [wallets]);

  useEffect( () => {
    getApi(`/api/transactions/${walletId}/transactions`, setTransactions).catch(console.error)
  }, [transactions]);

  useEffect( () => {
    getApi(`/api/transactions/${walletId}/expenses`, setExpenses).catch(console.error)
  }, [expenses]);

  useEffect( () => {
    getApi(`/api/wallet/transactions/${walletId}/incomes`, setIncomes).catch(console.error)
  }, [incomes]);

  return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home setCurrentWallets={setCurrentWallet} transactions={transactions} expenses={expenses} incomes={incomes} wallets={wallets} setTransactionTypesToDisplay={setTransactionTypesToDisplay} transactionTypeToDisplay={transactionTypeToDisplay}/>
              </Route>
              <Route exact path="/add">
                <AddTransaction/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default App


