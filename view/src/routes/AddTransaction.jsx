import TransactionList from "../components/TransactionList.jsx";
import {useState} from "react";

const AddTransaction = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        // to prevent page refresh
        e.preventDefault();
        const transfer = { title, amount }
        console.log(transfer)
        await fetch('/api/wallet/transactions',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(transfer)
            }
        )
        console.log("transfer added")
    }

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Transaction Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)}
                    }
                />
                <label>Amount</label>
                <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => {
                    setAmount(e.target.value)}
                    }
                />
                <button>Add Transaction</button>
                <p>{title}</p>
                <p>{amount}</p>
            </form>
        </div>
    )
}

export default AddTransaction
