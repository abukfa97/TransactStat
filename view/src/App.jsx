import './App.css'
import Transaction from "./components/Transaction";
import {useEffect, useState} from "react";

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



  //get data from API and update transactions
  const getApi = async (url) => {
    let response = await fetch(url);
    let savedTransactions = await response.json();
    setTransactions({...savedTransactions})
  }

  useEffect(async () => {
      await getApi('/api/wallet/transactions')
    }, [transactions]);


  return (
    <div className="App">
        {transactions.map((transaction, index) => (
      <Transaction key={index} name={transaction.name} amount={transaction.amount}/>
        ))}
    </div>
  )
}

export default App
