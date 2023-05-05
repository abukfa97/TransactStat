import TransactionButtons from "./TransactionButtons.jsx"
import {
    Box,
    Typography
} from "@mui/material";
import React from "react";

function TransactionList({
                             isMain,
                             expenses,
                             incomes,
                             setTransactionTypeToDisplay,
                             transactions,
                             transactionTypeToDisplay,
                             transactionType
                         }) {
    return (
        <div className="transaction-list">
            <TransactionButtons transactionTypeToDisplay={transactionTypeToDisplay}
                                isMain={isMain} transaction={transactions} expenses={expenses} incomes={incomes}
                                setTransactionTypeToDisplay={setTransactionTypeToDisplay}>

            </TransactionButtons>
            <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
                {isMain ?
                    ((transactionTypeToDisplay === undefined)
                        ? (transactions.map((transaction) => (
                            <Box
                                style={{width: '100%'}}
                                display='flex'
                                flexDirection='row'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom='5px solid'
                                borderBottomColor='rgb(20,10,56)'
                                p='15px'>
                                <Box>
                                    <Typography color='white'>
                                        {transaction.dateOfTransaction}
                                    </Typography>
                                    <Typography color='white' style={{fontSize: '12px'}}>
                                        {transaction.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='white'>
                                        {transaction.amount}
                                    </Typography>
                                </Box>

                            </Box>))) : (transactionTypeToDisplay.map((transaction) => (
                            <Box
                                style={{width: '100%'}}
                                display='flex'
                                flexDirection='row'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom='5px solid #140a38'
                                p='15px'>
                                <Box>
                                    <Typography color='white'>
                                        {transaction.dateOfTransaction}
                                    </Typography>
                                    <Typography color='white' style={{fontSize: '12px'}}>
                                        {transaction.title}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='white'>
                                        {transaction.amount}
                                    </Typography>
                                </Box>
                            </Box>
                        ))))
                    : (transactions.map((transaction) => (
                        <Box
                            style={{width: '100%'}}
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            alignItems='center'
                            borderBottom='5px solid #140a38'
                            p='15px'>
                            <Box>
                                <Typography color='white'>
                                    {transaction.dateOfTransaction}
                                </Typography>
                                <Typography color='white' style={{fontSize: '12px'}}>
                                    {transaction.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='white'>
                                    {transaction.amount}
                                </Typography>
                            </Box>
                        </Box>
                    )))}
            </Box>
        </div>
    )
}

export default TransactionList;