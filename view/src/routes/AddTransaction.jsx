import TransactionList from "../components/TransactionList.jsx";
import {useState} from "react";
import {Form} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap-grid.min.css'

const AddTransaction = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [dateOfTransaction, setDate] = useState('');
    const [transactionCategory, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState(''); // select menu -> CARD/CASH

    const handleSubmit = async (e) => {
        // to prevent page refresh
        e.preventDefault();
        const transfer = { title, amount, dateOfTransaction, transactionCategory, paymentType }

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
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Transaction Title</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)}
                        }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => {
                        setAmount(e.target.value)}
                        }
                    />
                </Form.Group>
                <Form.Group>
                <Form.Label>Date Of Transaction</Form.Label>
                <Form.Control
                    type="date"
                    required
                    value={dateOfTransaction}
                    onChange={(e) => {
                        setDate(e.target.value)}
                    }
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Payment Type</Form.Label>
                <select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                >
                    <option value="CASH">Cash</option>
                    <option value="CARD">Card</option>
                </select>
                </Form.Group>
                <Form.Group>

                <Form.Label>Category</Form.Label>
                <Form.Control
                    type="text"
                    required
                    value={transactionCategory}
                    onChange={(e) => {
                        setCategory(e.target.value)}
                    }
                />

                </Form.Group>
                <button>Add Transaction</button>
                <p>{title}</p>
                <p>{amount}</p>
                <p>{dateOfTransaction}</p>
                <p>{paymentType}</p>
                <p>{transactionCategory}</p>
            </Form>
        </div>
    )
}

export default AddTransaction
