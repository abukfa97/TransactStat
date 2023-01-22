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
    TableRow
} from "@mui/material";
import React from "react";
import Header from "./Header.jsx";
function TransactionList({ isMain, expenses, incomes, setTransactionTypeToDisplay, transactions, transactionTypeToDisplay, transactionType}) {
    console.log(transactionTypeToDisplay)

    return(
        <div className="transaction-list">

            <Box m={6}>
            {/*    {isMain && <Header title='Transactions' subtitles="All your transactions in one place"></Header>}*/}
                <Box>
            <TransactionButtons transactionTypeToDisplay={transactionTypeToDisplay} isMain={isMain} transaction={transactions} expenses={expenses} incomes={incomes} setTransactionTypeToDisplay={setTransactionTypeToDisplay}></TransactionButtons>
            <TableContainer sx={{ maxHeight: '300px'}}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow
                            style={{backgroundColor:'red', color: 'white',}}>
                            <TableCell style={{backgroundColor:'#bfebab', color: 'white',}}>{(transactionType === 'expenses') ? 'Expenses' : ((transactionType === 'incomes') ? 'Incomes' : 'Transactions')}</TableCell>
                            <TableCell style={{backgroundColor:'#bfebab', color: 'white',}}>Amount</TableCell>
                            <TableCell style={{backgroundColor:'#bfebab', color: 'white',}}>Mode</TableCell>
                            <TableCell style={{backgroundColor:'#bfebab', color: 'white',}}>Date</TableCell>
                            <TableCell style={{backgroundColor:'#bfebab', color: 'white',}}>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isMain ? (transactionTypeToDisplay.map((row) =>
                                (<TableRow sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                                        <TableCell style={{ color: 'white',}}>{row.title}</TableCell>
                                        <TableCell style={{ color: 'white',}}>{row.amount}</TableCell>
                                        <TableCell style={{ color: 'white',}}>{row.paymentType}</TableCell>
                                        <TableCell style={{ color: 'white',}}>{row.dateOfTransaction}</TableCell>
                                        <TableCell style={{ color: 'white',}}>{row.transactionCategory}</TableCell>
                                    </TableRow>))) :
                        (transactions.map((row) =>
                            (<TableRow>
                                <TableCell style={{ color: 'white',}}>{row.title}</TableCell>
                                <TableCell style={{ color: 'white',}}>{row.amount}</TableCell>
                                <TableCell style={{ color: 'white',}}>{row.paymentType}</TableCell>
                                <TableCell style={{ color: 'white',}}>{row.dateOfTransaction}</TableCell>
                                <TableCell style={{ color: 'white',}}>{row.transactionCategory}</TableCell>
                            </TableRow>)))}

                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
            </Box>


        </div>

    )
}

export default TransactionList;