import Button from '@mui/material/Button';

function TransactionButtons({ isMain, transaction, expenses, incomes, setTransactionTypeToDisplay }) {
    if (isMain) {
        return(
            <div className="displayOptions" style={{display: "flex", justifyContent: "center", marginBottom: '10px'}}>
                <Button variant="text" style={{ color: '#a157be'}} onClick={() => {setTransactionTypeToDisplay(transaction)}}>Recent Transactions</Button>
                <Button variant="text" style={{ color: '#727272'}} onClick={() => {setTransactionTypeToDisplay(expenses)}}>Recent Expenses</Button>
                <Button variant="text" style={{ color: '#727272'}} onClick={() => {setTransactionTypeToDisplay(incomes)}}>Recent Incomes</Button>
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