import TransactionList from "../components/TransactionList.jsx";
import {useState} from "react";
import {Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Link, useHistory} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

const AddTransaction = () => {
    const menuRoute = '/Add'
    const urlRoute = '/add'

    const history = useHistory()

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [dateOfTransaction, setDate] = useState('');
    const [transactionCategory, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState(''); // select menu -> CARD/CASH

    const handleSubmit = async (e) => {
        // to prevent page refresh
        e.preventDefault();
        const transfer = { title, amount, dateOfTransaction, transactionCategory, paymentType }

        await fetch('/api/transactions/wallet',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(transfer)
            }
        )
    }

    return (
        <div>
            <Sidebar menuRoute={menuRoute} urlRoute={urlRoute}/>
            <h5 className='transaction-header flex-container width-83 top-5'>Add New Transaction</h5>
            <div className='card-grey width-83 center'>
            <Form onSubmit={handleSubmit} className='width-83 center margin-10'>
                <Form.Group className="group">
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
                <Form.Group className="group">
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
                <Form.Group className="group">
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
                <Form.Group className="group">
                    <div> <Form.Label>Payment Type</Form.Label></div>

                <select className='select'
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                >
                    <option value="CASH">Cash</option>
                    <option value="CARD">Card</option>
                </select>
                </Form.Group>
                <Form.Group className="group">

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
                <div className='flex-container top-2'>
                    <button className="group" onClick={() => {
                        history.goBack()
                    }}>Add Transaction</button>
                    <Link className="group" to='/'>Back</Link>
                </div>
            </Form>
            </div>
        </div>
    )
}

export default AddTransaction
