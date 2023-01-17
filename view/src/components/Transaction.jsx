import{ListGroup}from'react-bootstrap';

const Transaction = ({ name, amount }) => {
    return (
            <ListGroup.Item ><div className='flex-between'><span>{name}</span><span className='red'>{amount}HUF</span></div></ListGroup.Item>
    )
}

export default Transaction