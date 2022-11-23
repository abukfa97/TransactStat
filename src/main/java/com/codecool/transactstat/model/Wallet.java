package com.codecool.transactstat.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Component
public class Wallet {

    private List<Transaction> transactionList = new ArrayList<>();

    public Transaction getTransactionById(UUID id){
        return transactionList.stream().filter(transaction -> transaction.getId = id).findFirst();
    }

    public List<Transaction> getAllTransactions(){
        return transactionList;
    }

    public void addTransaction(Transaction transaction){
        transactionList.add(transaction);
    }

    public void update(Transaction transaction){
        getTransactionById(transaction.getId) = transaction;
        transactionToUpdate.setTitle(transaction.getTitle);
        transactionToUpdate.setAmount(transaction.getAmount);
        transactionToUpdate.setDateOfTransaction(transaction.getDateOfTransaction);
        transactionToUpdate.setTransactionCategory(transaction.getTransactionCategory);
        transactionToUpdate.setPaymentType(transaction.getPaymentType);
    }
}
