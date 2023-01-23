import Button from '@mui/material/Button';

function TransactionButtons({ isMain, transaction, expenses, incomes, setTransactionTypeToDisplay }) {
    if (isMain) {
        return(
            <div className="displayOptions" style={{display: "flex", justifyContent: "center", marginBottom: '10px'}}>
                <Button variant="text" style={{ color: '#fff'}} onClick={() => {setTransactionTypeToDisplay(transaction)}}>All Transactions</Button>
                <Button variant="text" style={{ color: '#fff'}} onClick={() => {setTransactionTypeToDisplay(expenses)}}>Expenses</Button>
                <Button variant="text" style={{ color: '#fff'}} onClick={() => {setTransactionTypeToDisplay(incomes)}}>Incomes</Button>
            </div>
        )
    } else {
        return(
            <>
            </>
        )
    }
}

export default TransactionButtons;