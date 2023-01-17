import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import {Link} from "react-router-dom";
import DisplayOptions from "./DisplayOptions.jsx"
function TransactionList({ transactions, isMain }) {

    return(
        <>
             {/*TODO should be another component*/}
            <div className='flex-container width-83 top-5'>
                <h5>Transactions</h5>
                <Link to="/add">Add Transaction</Link>
            </div>

            <DisplayOptions></DisplayOptions>

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