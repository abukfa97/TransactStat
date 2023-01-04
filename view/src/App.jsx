import './App.css'
import Transaction from "./components/Transaction";
import {useEffect, useState} from "react";

function App() {
  const exampleTransactions = [
    {
      name: "Transaction 1"
    },
    {
      name: "Transaction 2"
    }
  ]
  const [transactions, setTransactions] = useState(exampleTransactions)


  //get data from API and update transactions
  useEffect(async () => {
    let response = await fetch('/api/wallet/transactions');
    let savedTransactions = await response.json();
    setTransactions({...savedTransactions})
  }, [transactions]);
  

  return (
    <div className="App">
        {transactions.map((transaction, index) => (
      <Transaction key={index} name={transaction.name}/>
        ))}
    </div>
  )
}

export default App
