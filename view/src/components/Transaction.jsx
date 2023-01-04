const Transaction = ({ name, amount }) => {
    return (
        <div>
            <li>
                <p className="transaction-amount">{amount}</p>
                <p className="transaction-name">{name}</p>
            </li>
        </div>
    )
}

export default Transaction