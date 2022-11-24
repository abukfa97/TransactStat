package com.codecool.transactstat.service;

import com.codecool.transactstat.dao.WalletDao;
import com.codecool.transactstat.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

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

    public Transaction getBiggestTransaction() {
        List<Transaction> transactions = walletDao.getTransactions();
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
