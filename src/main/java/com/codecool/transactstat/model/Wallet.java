package com.codecool.transactstat.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Component
public class Wallet {
    private List<Transaction> transactionList = new ArrayList<>();

    public Transaction getTransaction(UUID id){
        throw new UnsupportedOperationException();
    }
    public void addTransaction(){
        throw new UnsupportedOperationException();
    }
    public void update(){
        throw new UnsupportedOperationException();
    }
}
