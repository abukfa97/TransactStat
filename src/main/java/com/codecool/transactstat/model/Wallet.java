package com.codecool.transactstat.model;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Component
public class Wallet {

    private List<Transaction> transactionList = new ArrayList<>();

    private BigDecimal balance = BigDecimal.valueOf(1);
    //TODO: implement constructor to get starting balance

    public BigDecimal getCurrentBalance() {
        return balance;
    }

    public Optional<Transaction> getTransactionById(UUID id){
        return transactionList.stream().filter(transaction -> transaction.getId().equals(id)).findFirst();
    }

    public List<Transaction> getAllTransactions(){
        return transactionList;
    }

    public void addTransaction(Transaction transaction){
        transactionList.add(transaction);
        updateBalance(transaction.getAmount(), "add");
    }

    public void update(Transaction transaction, UUID id){
        getTransactionById(id).ifPresent(transactionToUpdate -> {
            updateBalance(transactionToUpdate.getAmount(), "subtract");
            updateBalance(transaction.getAmount(), "add");
            transactionToUpdate.setTitle(transaction.getTitle());
            transactionToUpdate.setAmount(transaction.getAmount());
            transactionToUpdate.setDateOfTransaction(transaction.getDateOfTransaction());
            transactionToUpdate.setTransactionCategory(transaction.getTransactionCategory());
            transactionToUpdate.setPaymentType(transaction.getPaymentType());
        });

    }

    public void delete(UUID id){
        getTransactionById(id).ifPresent(transactionToDelete -> {
            updateBalance(transactionToDelete.getAmount(), "subtract");
            transactionList.remove(transactionToDelete);
        });
    }

    private void updateBalance(BigDecimal amount, String updateType) {
        switch (updateType) {
            case "add" -> balance = balance.add(amount);
            case "subtract" -> balance = balance.subtract(amount);
        }
    }

}
