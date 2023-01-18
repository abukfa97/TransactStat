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
  const [wallets, setWallets] = useState([])

  const user = Cookies.get('user');
  const userId = user.id;

  const getApiTransactions = async (url) => {
    let response = await fetch(url);
    let savedTransactions = await response.json();
    setTransactions([...savedTransactions])
  }

  const getApiWallets = async (url) => {
    let response = await fetch(url);
    let wallets = await response.json();
    setWallets([...wallets])
  }
  useEffect( () => {
    getApiWallets(`/api/wallets/${userId}/`).catch(console.error)
  }, [wallets]);


    useEffect( () => {
      getApiTransactions('/api/transactions/1/transactions').catch(console.error)
    }, [transactions]);

  return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home transactions={transactions} wallets={wallets}/>
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


