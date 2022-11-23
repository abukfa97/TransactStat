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
    public void addTransaction(){
        throw new UnsupportedOperationException();
    }
    public void update(){
        throw new UnsupportedOperationException();
    }
}
