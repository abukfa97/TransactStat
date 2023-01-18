import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import DisplayOptions from "./DisplayOptions.jsx"
function TransactionList({ isMain, expenses, incomes, setTransactionTypeToDisplay, transactions, transactionTypeToDisplay}) {

    return(
        <div className="transaction-list">

            <DisplayOptions transactionTypeToDisplay={transactionTypeToDisplay} isMain={isMain} transaction={transactions} expenses={expenses} incomes={incomes} setTransactionTypeToDisplay={setTransactionTypeToDisplay}></DisplayOptions>

            <Container className='p-4'>
                <Col>
                    <ListGroup>
                        {transactionTypeToDisplay.map((transaction, index) =>
                            <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                        )}
                    </ListGroup>
                </Col>
            </Container>

        </div>

    )
}

export default TransactionList;