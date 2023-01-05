import Transaction from "./Transaction.jsx";

function TransactionList({ transactions }) {
    return(
       <div>
            <ul>
                {transactions.map((transaction, index) =>
                    <Transaction key={index} name={transaction.title} amount={transaction.amount}/>
                )}
            </ul>
       </div>
    )
}

export default TransactionList;