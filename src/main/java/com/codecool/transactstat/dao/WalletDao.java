package com.codecool.transactstat.dao;

import com.codecool.transactstat.model.Transaction;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface WalletDao {
    List<Transaction> getTransactions();
    Optional<Transaction> getTransaction(UUID id);
    void addTransaction(Transaction transaction);
    void updateTransaction(Transaction transaction, UUID id);
    void deleteTransaction(UUID id);

    BigDecimal getCurrentBalance();
}
