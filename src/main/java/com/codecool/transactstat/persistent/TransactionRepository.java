package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

    List<Transaction> getTransactionByWallet(Wallet wallet);
}
