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

  const [transactionTypesToDisplay, setTransactionTypesToDisplay] = useState(transactions)

  const [wallets, setWallets] = useState([])

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  const user = Cookies.get('user');
  const userId = user.id;

  const getApi = async(url, setter) => {
    let response = await fetch(url);
    let data = await response.json();
    setter([...data])
  }


  useEffect( () => {
    getApi(`/api/wallets/${userId}/`, setWallets).catch(console.error)
  }, [wallets]);

  useEffect( () => {
    getApi('/api/transactions/1/transactions', setTransactions).catch(console.error)
  }, [transactions]);

  useEffect( () => {
    getApi('/api/transactions/{wallet-id}/expenses', setExpenses).catch(console.error)
  }, [expenses]);

  useEffect( () => {
    getApi('/api/wallet/transactions/{wallet-id}/incomes', setIncomes).catch(console.error)
  }, [incomes]);

  return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home transactions={transactions} expenses={expenses} incomes={incomes} wallets={wallets} setTransactionTypesToDisplay={setTransactionTypesToDisplay} transactionTypeToDisplay={transactionTypesToDisplay}/>
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


