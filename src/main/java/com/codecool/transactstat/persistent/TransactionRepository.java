package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.Wallet;

import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> getTransactionsByWallet(Wallet wallet);

    Transaction findTopByWalletOrderByAmount(Wallet wallet);

    List<Transaction> getTransactionByWalletAndAmountGreaterThan(Wallet wallet,BigDecimal value);

    List<Transaction> getTransactionByWalletAndAmountLessThan(Wallet wallet,BigDecimal value);
}
