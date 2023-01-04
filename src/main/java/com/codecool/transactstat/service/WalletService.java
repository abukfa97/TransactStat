package com.codecool.transactstat.service;

import com.codecool.transactstat.controller.TransactionNotFoundException;
import com.codecool.transactstat.dao.WalletDao;
import com.codecool.transactstat.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
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
        return walletDao.getTransaction(id).orElseThrow(TransactionNotFoundException::new);
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
                .filter(transaction -> transaction.getAmount().compareTo(BigDecimal.ZERO) == -1)
                .collect(Collectors.toList());
    }

    public List<Transaction> getIncomes(){
        return getTransactions()
                .stream()
                .filter(transaction -> transaction.getAmount().compareTo(BigDecimal.ZERO) == 1)
                .collect(Collectors.toList());
    }

    public List<Transaction> getTransactionsByDate(LocalDate date){
        return walletDao.getTransactions()
                .stream()
                .filter((transaction -> transaction.getDateOfTransaction().equals(date)))
                .collect(Collectors.toList());
    }

    public Transaction getBiggestTransaction() {
        List<Transaction> transactions = getTransactions();
        Transaction biggestTransaction = null;
        BigDecimal baseValue = new BigDecimal(0);
        for (Transaction transaction :
                transactions) {
           int res = transaction.getAmount().compareTo(baseValue);
           if(res == 1){
                baseValue = transaction.getAmount();
                biggestTransaction = transaction;
           }
        }
        return biggestTransaction;

    }
}
