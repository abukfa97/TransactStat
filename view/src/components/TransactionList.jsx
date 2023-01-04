import Transaction from "./Transaction.jsx";

function TransactionList({transactions}) {

    return(
       <div>
            <ol>
                {transactions.map((transaction, index) => {
                    <Transaction key={index} name={transaction.name} amount={transaction.amount}/>
                })}
            </ol>
       </div>
    )
}

export default TransactionList;