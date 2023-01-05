import './App.css'
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home.jsx";
import AddTransaction from "./routes/AddTransaction.jsx";

function App() {
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
  const [transactions, setTransactions] = useState(exampleTransactions)

  const loadForm = () => {
    return (
        <div>
          <p>This is a new page</p>
        </div>
    )
  }



  //get data from API and update transactions
  const getApi = async (url) => {
    let response = await fetch(url);
    let savedTransactions = await response.json();
    setTransactions({...savedTransactions})
  }

  //get data from API and update transactions

    useEffect( () => {
      getApi('/api/wallet/transactions').catch(console.error)
    }, [transactions]);


  return (
      <Router>
        <div className="App">
          <Sidebar/>
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
