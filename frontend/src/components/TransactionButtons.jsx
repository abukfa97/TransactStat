import {useState} from "react";

function TransactionButtons({isMain, transaction, expenses, incomes, setTransactionTypeToDisplay}) {
    const [active, setActive] = useState("1")
    const handleClick = (event) => setActive(event.target.id.toString());

    if (isMain) {
        return (
            <div className="displayOptions" style={{display: "flex", justifyContent: "center", marginBottom: '10px'}}>
                <button key='1' id='1'
                        className={active === "1" ? "active-transaction" : "transaction-button"}
                        onClick={(event) => {
                            handleClick(event);
                            setTransactionTypeToDisplay(transaction)
                        }}>
                    Recent Transactions
                </button>
                <button key='2' id='2'
                        className={active === "2" ? "active-transaction" : "transaction-button"}
                        onClick={(event) => {
                            handleClick(event);
                            setTransactionTypeToDisplay(expenses)
                        }}>
                    Recent Expenses
                </button>
                <button key='3' id='3'
                        className={active === "3" ? "active-transaction" : "transaction-button"}
                        onClick={(event) => {
                            handleClick(event);
                            setTransactionTypeToDisplay(incomes)
                        }}>
                    Recent Incomes
                </button>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default TransactionButtons;