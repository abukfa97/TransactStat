import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                <button className="button simple-button active" onClick={() => {setTransactionTypeToDisplay(transaction)}}>All Transactions</button>
                <button className="button simple-button" onClick={() => {setTransactionTypeToDisplay(expenses)}}>Expenses</button>
                <button className="button simple-button" onClick={() => {setTransactionTypeToDisplay(incomes)}}>Incomes</button>
                <button className="button add-transaction">{link}</button>
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