import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import TransactionButtons from "./TransactionButtons.jsx"
import {
    Box,
    List,
    ListItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import React from "react";
import Header from "./Header.jsx";
function TransactionList({ isMain, expenses, incomes, setTransactionTypeToDisplay, transactions, transactionTypeToDisplay, transactionType}) {
    console.log('Transationtype:' + transactionTypeToDisplay)

    return(
        <div className="transaction-list">
            <TransactionButtons transactionTypeToDisplay={transactionTypeToDisplay} isMain={isMain} transaction={transactions} expenses={expenses} incomes={incomes} setTransactionTypeToDisplay={setTransactionTypeToDisplay}></TransactionButtons>
            <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' >
                {isMain ? ((transactionTypeToDisplay === undefined) ? (transactions.map((transaction) => (
                    <Box
                        style={{width: '100%'}}
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom='5px solid #140a38'
                        p='15px'
                    >
                        <Box>
                            <Typography color='white'>{transaction.dateOfTransaction}</Typography>
                            <Typography color='white' style={{fontSize: '12px'}}>{transaction.title}</Typography>
                        </Box>
                        <Box>
                            <Typography color='white'>{transaction.amount}</Typography>
                        </Box>

                    </Box>))) : (transactionTypeToDisplay.map((transaction) => (
                    <Box
                        style={{width: '100%'}}
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom='5px solid #140a38'
                        p='15px'
                    >
                        <Box>
                            <Typography color='white'>{transaction.dateOfTransaction}</Typography>
                            <Typography color='white' style={{fontSize: '12px'}}>{transaction.title}</Typography>
                        </Box>
                        <Box>
                            <Typography color='white'>{transaction.amount}</Typography>
                        </Box>

                    </Box>
                )))) : (transactions.map((transaction) => (
                    <Box
                        style={{width: '100%'}}
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom='5px solid #140a38'
                        p='15px'
                    >
                        <Box>
                            <Typography color='white'>{transaction.dateOfTransaction}</Typography>
                            <Typography color='white' style={{fontSize: '12px'}}>{transaction.title}</Typography>
                        </Box>
                        <Box>
                            <Typography color='white'>{transaction.amount}</Typography>
                        </Box>

                    </Box>)))
                }
            </Box>


        </div>

    )
}

export default TransactionList;