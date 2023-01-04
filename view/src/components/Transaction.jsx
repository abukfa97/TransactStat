const Transaction = ({ name, amount }) => {
    return (
            <li>
                <p className="transaction-amount">{amount}</p>
                <p className="transaction-name">{name}</p>
            </li>
    )
}

export default Transaction