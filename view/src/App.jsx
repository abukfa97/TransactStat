import './App.css'
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home.jsx";
import AddTransaction from "./routes/AddTransaction.jsx";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import'bootstrap/dist/css/bootstrap.min.css';
import{Container,ListGroup,Col}from'react-bootstrap';
import React from 'react';
import Cookies from 'js-cookie';


function App() {
  const menuRoute = '/Dashboard'
  const urlRoute = '/'
  const exampleTransactions = [
    {
      amount: 350000,
      name: "Transaction 1"
    },
    {
      amount: 6500,
      name: "Transaction 2"
    }
  ]
  const [transactions, setTransactions] = useState([exampleTransactions])
  // const [incomes, setIncomes] = useState([exampleTransactions])
  // const [expenses, setExpenses] = useState([exampleTransactions])

  // get userId (or user TDO) from cookies
  // getWallet id-s from user
  // send wallet id-s up to sidebar and instead of wallet, iterate over wallet-s and display name+store id in them
  // if user clicks, we go to the dashboard according to the wallet-id.


  //get data from API and update transactions
  const getApiTransactions = async (url) => {
    let response = await fetch(url);
    let savedTransactions = await response.json();
    setTransactions([...savedTransactions])
  }


  // const getApiExpenses = async (url) => {
  //   let response = await fetch(url);
  //   let savedExpenses = await response.json();
  //   setExpenses([...savedExpenses])
  // }
  // const getApiIncomes = async (url) => {
  //   let response = await fetch(url);
  //   let savedIncomes = await response.json();
  //   setIncomes([...savedIncomes])
  // }

  //get data from API and update transactions

    useEffect( () => {
      getApiTransactions('/api/transactions/1/transactions').catch(console.error)
    }, [transactions]);

    // useEffect( () => {
    //   getApiExpenses('/api/transactions/{wallet-id}/expenses').catch(console.error)
    // }, [expenses]);
    //
    // useEffect( () => {
    //   getApiIncomes('/api/wallet/transactions/{wallet-id}/incomes').catch(console.error)
    // }, [incomes]);


  return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home transactions={transactions}/>
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

// register new user (insomnia)
// get wallet-id (insomnia)
// fetch with that wallet-id
// wallet id -> as dataset to dropdown select
// based on id, different fetch

