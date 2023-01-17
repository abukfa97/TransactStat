import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import {Link} from "react-router-dom";
import DisplayOptions from "./DisplayOptions.jsx"
import {useState} from "react";
function TransactionList({ transactions, isMain, title }) {
    const [transactions, setTransactions] = useState(transactions)


    return(
        <div className="transaction-list">
             {/*TODO should be another component*/}
            <div className='flex-container width-83 top-5'>
                {/*<h5>{title}</h5>*/}
            </div>

            <DisplayOptions isMain={isMain}></DisplayOptions>

            <Container className='p-4'>
                <Col>
                    <ListGroup>
                        {transactions.map((transaction, index) =>
                            <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                        )}
                    </ListGroup>
                </Col>
            </Container>
        </div>

    )
}

export default TransactionList;

// onclick -> change color
// onclick -> reload