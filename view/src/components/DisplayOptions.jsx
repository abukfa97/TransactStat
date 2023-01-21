import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

function DisplayOptions({ isMain, transaction, expenses, incomes, setTransactionTypeToDisplay }) {
    if (isMain) {
        let link;
        if (isMain){
            link = <Link  style={{color: 'black'}} to="/add">Add Transaction</Link>
        } else {
            link = <></>
        }
        return(
            <div className="displayOptions">
                <Button variant="text" onClick={() => {setTransactionTypeToDisplay(transaction)}}>All Transactions</Button>
                <Button variant="text" onClick={() => {setTransactionTypeToDisplay(expenses)}}>Expenses</Button>
                <Button variant="text" onClick={() => {setTransactionTypeToDisplay(incomes)}}>Incomes</Button>
                <Button variant="text">{link}</Button>
            </div>
        )
    } else {
        return(
            <>
            </>
        )
    }
}

export default DisplayOptions;