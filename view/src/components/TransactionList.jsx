import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import {Link} from "react-router-dom";
import DisplayOptions from "./DisplayOptions.jsx"
import {useState} from "react";
function TransactionList({ transactions, expenses, incomes, isMain, title }) {

    const [transactionType, setTransactionType] = useState(transactions)
    const handleOnClick = (transactionType) => {
        setTransactionType(transactionType)
    }



    return(
        <div className="transaction-list">
             {/*TODO should be another component*/}
            <div className='flex-container width-83 top-5'>
                {/*<h5>{title}</h5>*/}
            </div>

            <DisplayOptions isMain={isMain} handleOnClick={handleOnClick} transaction={transactions} expenses={expenses} incomes={incomes}></DisplayOptions>

            <Container className='p-4'>
                <Col>
                    <ListGroup>
                        {transactionType.map((transaction, index) =>
                            <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                        )}
                    </ListGroup>
                </Col>
            </Container>
        </div>

    )
}

export default TransactionList;