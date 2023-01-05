import TransactionList from "../components/TransactionList.jsx";
import {useState} from "react";

const AddTransaction = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [dateOfTransaction, setDate] = useState('');
    const [transactionCategory, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState(''); // select menu -> CARD/CASH

    const handleSubmit = async (e) => {
        // to prevent page refresh
        e.preventDefault();
        const transfer = { title, amount }
        console.log(transfer)
        await fetch('/api/wallet/transactions',
            {
                target: 'http://localhost:8080',
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
                <label>Date Of Transaction</label>
                <input
                    type="date"
                    required
                    value={dateOfTransaction}
                    onChange={(e) => {
                        setDate(e.target.value)}
                    }
                />
                <label>Category</label>
                <select
                    value={transactionCategory}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="CASH">Cash</option>
                    <option value="CARD">Card</option>
                </select>
                <label>Payment Type</label>
                <input
                    type="text"
                    required
                    value={paymentType}
                    onChange={(e) => {
                        setPaymentType(e.target.value)}
                    }
                />
                <button>Add Transaction</button>
                <p>{title}</p>
                <p>{amount}</p>
                <p>{dateOfTransaction}</p>
                <p>{paymentType}</p>
                <p>{transactionCategory}</p>
            </form>
        </div>
    )
}

export default AddTransaction
