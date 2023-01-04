package com.codecool.transactstat.dao;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.Wallet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class WalletInMemDao implements WalletDao {

    final Wallet wallet;

    @Autowired
    public WalletInMemDao(Wallet wallet) {
        this.wallet = wallet;
    }


    @Override
    public List<Transaction> getTransactions() {
        return wallet.getAllTransactions();
    }

    @Override
    public Optional<Transaction> getTransaction(UUID id) {
        return wallet.getTransactionById(id);
    }

    @Override
    public void addTransaction(Transaction transaction) {
        wallet.addTransaction(transaction);
    }

    @Override
    public void updateTransaction(Transaction transaction, UUID id) {
        wallet.update(transaction, id);
    }

    @Override
    public void deleteTransaction(UUID id) {
        wallet.delete(id);
    }

    @Override
    public BigDecimal getCurrentBalance() {
        return wallet.getCurrentBalance();
    }
}
