import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import {Link} from "react-router-dom";
function TransactionList({ transactions }) {
    return(
        <>
             {/*TODO should be another component*/}
            <div className='flex-container width-83 top-5'>
                <h5>Transactions</h5>
                <Link to="/add">Add Transaction</Link>
            </div>

            <Container className='p-4'>
                <Col>
                    <ListGroup>
                        {transactions.map((transaction, index) =>
                            <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                        )}
                    </ListGroup>
                </Col>
            </Container>
        </>

    )
}

export default TransactionList;