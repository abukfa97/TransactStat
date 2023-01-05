import TransactionList from "../components/TransactionList.jsx";

const Home = ({ transactions }) => {
    return (
        <div>
            <TransactionList  transactions={transactions}/>
            <button>Add Transaction</button>
        </div>
    )
}

export default Home