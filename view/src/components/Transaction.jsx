import{Container,ListGroup,Col}from'react-bootstrap';
const Transaction = ({ name, amount }) => {
    return (
            <ListGroup.Item>{name}: {amount}HUF</ListGroup.Item>
    )
}

export default Transaction