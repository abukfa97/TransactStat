import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
function TransactionList({ transactions }) {
    return(
        <Container className='p-4'>
            <Col md={30}>
                <ListGroup>
                    {transactions.map((transaction, index) =>
                        <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                    )}
                </ListGroup>
            </Col>
        </Container>
    )
}

export default TransactionList;