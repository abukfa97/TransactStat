import {useState} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Link} from "react-router-dom";
import NavigationBar from "../components/NavigationBar.jsx";

const AddTransaction = ({wallets, walletId}) => {
    const menuRoute = '/Add';
    const urlRoute = '/add';

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [dateOfTransaction, setDate] = useState('');
    const [transactionCategory, setCategory] = useState('');
    const [paymentType, setPaymentType] = useState(''); // select menu -> CARD/CASH

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transfer = {
            "title": title,
            "amount": amount,
            "dateOfTransaction": dateOfTransaction,
            "transactionCategory": transactionCategory,
            "paymentType": paymentType,
            "walletId": walletId
        }
        await fetch('/api/transactions',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(transfer)
            })
    }

    return (
        <div>
            <div className="toolbar-height"></div>
            {/*sidebar to app.jsx*/}
            <NavigationBar menuRoute={menuRoute} urlRoute={urlRoute} wallets={wallets}/>
            <h5 className='transaction-header flex-container width-83 top-5'>Add New Transaction</h5>
            <div className='card-grey width-83 center'>
                <form onSubmit={handleSubmit} className='width-83 center margin-10'>
                    <div className="group">
                        <label>Transaction Title</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <label>Amount</label>
                        <input
                            type="number"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <label>Date Of Transaction</label>
                        <input
                            type="date"
                            required
                            value={dateOfTransaction}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <label>Payment Type</label>

                        <select className='select'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value)}>
                            <option value="CASH">Cash</option>
                            <option value="CARD">Card</option>
                        </select>
                    </div>
                    <div className="group">

                        <label>Category</label>
                        <input
                            type="text"
                            required
                            value={transactionCategory}
                            onChange={(e) => setCategory(e.target.value)}
                        />

                    </div>
                    <div className='flex-container top-2'>
                        <button className="group">
                            Add Transaction
                        </button>
                        <Link className="group" to='/home'>Back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction
