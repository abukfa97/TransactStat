import './App.css'
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar.jsx";

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

  //get data from API and update transactions

    useEffect( () => {
      getApi('/api/wallet/transactions').catch(console.error)
    }, [transactions]);

   async function getIncomes(){
     useEffect(() => {
       getApi('localhost:8080/api/transactions/incomes').catch(console.error)
     }, [transactions])
     return transactions;
   }

  return (
    <div className="App">
      <Sidebar/>
      <TransactionList  transactions={transactions}/>
      <TransactionList transactions={async () => {
        return await getIncomes()
      }}/>
    </div>
  )
}

export default App
