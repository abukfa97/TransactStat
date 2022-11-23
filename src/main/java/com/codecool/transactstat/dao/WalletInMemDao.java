package com.codecool.transactstat.dao;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.Wallet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class WalletInMemDao implements WalletDao {

    @Autowired
    Wallet wallet;


    @Override
    public List<Transaction> getTransactions() {
        return wallet.getAllTransactions();
    }

    @Override
    public Transaction getTransaction(UUID id) {
        return wallet.getTransactionById(id).orElse(null);
    }

    @Override
    public void addTransaction(Transaction transaction) {
        wallet.addTransaction(transaction);
    }

    @Override
    public void updateTransaction(Transaction transaction) {
        wallet.update(transaction);
    }
}
