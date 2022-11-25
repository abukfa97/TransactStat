package com.codecool.transactstat.service;

import com.codecool.transactstat.dao.WalletDao;
import com.codecool.transactstat.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class WalletService {

    private final WalletDao walletDao;

    @Autowired
    public WalletService(WalletDao walletDao) {
        this.walletDao = walletDao;
    }

    public List<Transaction> getTransactions(){
        return walletDao.getTransactions();
    }

    public Transaction getTransaction(UUID id){
        return walletDao.getTransaction(id);
    }

    public void addTransaction(Transaction transaction){
        walletDao.addTransaction(transaction);
    }

    public void updateTransaction(Transaction transaction, UUID id){
        walletDao.updateTransaction(transaction, id);
    }
    public void  deleteTransaction(UUID id){
        walletDao.deleteTransaction(id);
    }

    public List<Transaction> getExpenses () {
        return getTransactions()
                .stream()
                .filter(Transaction::isExpense)
                .collect(Collectors.toList());
    }

    public List<Transaction> getTransactionsByDate(LocalDate date){
        return walletDao.getTransactions()
                .stream()
                .filter((transaction -> transaction.getDateOfTransaction().equals(date)))
                .collect(Collectors.toList());
    }

    public Optional<Transaction> getBiggestTransaction() {
        List<Transaction> transactions = getTransactions();

        return transactions.stream().max(Comparator.comparing(Transaction::getAmount));


    }
}
