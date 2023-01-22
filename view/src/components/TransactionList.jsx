import Transaction from "./Transaction.jsx";
import{Container,ListGroup,Col}from'react-bootstrap';
import DisplayOptions from "./DisplayOptions.jsx"
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
function TransactionList({ isMain, expenses, incomes, setTransactionTypeToDisplay, transactions, transactionTypeToDisplay}) {
    console.log(transactionTypeToDisplay)

    return(
        <div className="transaction-list">

            <Box m={6}>
            {/*    {isMain && <Header title='Transactions' subtitles="All your transactions in one place"></Header>}*/}
                <Box>
            <DisplayOptions transactionTypeToDisplay={transactionTypeToDisplay} isMain={isMain} transaction={transactions} expenses={expenses} incomes={incomes} setTransactionTypeToDisplay={setTransactionTypeToDisplay}></DisplayOptions>
            <TableContainer sx={{ maxHeight: '300px'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Transfer</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Mode</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isMain ? (transactionTypeToDisplay.map((row) =>
                                (<TableRow sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.paymentType}</TableCell>
                                        <TableCell>{row.dateOfTransaction}</TableCell>
                                        <TableCell>{row.transactionCategory}</TableCell>
                                    </TableRow>))) :
                        (transactions.map((row) =>
                            (<TableRow>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.paymentType}</TableCell>
                                <TableCell>{row.dateOfTransaction}</TableCell>
                                <TableCell>{row.transactionCategory}</TableCell>
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