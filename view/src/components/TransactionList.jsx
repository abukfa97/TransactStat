import Transaction from "./Transaction.jsx";

function TransactionList({ transactions }) {
    return(
       <div>
            <ul>
                {transactions.map((transaction, index) =>
                    <Transaction key={index} name={transaction.name} amount={transaction.amount}/>
                )}
            </ul>
       </div>
    )
}

export default TransactionList;