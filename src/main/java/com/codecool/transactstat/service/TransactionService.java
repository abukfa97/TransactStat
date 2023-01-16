package com.codecool.transactstat.service;

import com.codecool.transactstat.controller.TransactionNotFoundException;
import com.codecool.transactstat.persistent.TransactionRepository;
import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final WalletRepository walletRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository, WalletRepository walletRepository) {
        this.transactionRepository = transactionRepository;
        this.walletRepository = walletRepository;
    }

    public List<Transaction> getTransactions(UUID walletId){
        return transactionRepository.getTransactionByWallet(walletRepository.getReferenceById(walletId));
    }

    public Transaction getTransaction(UUID id){
        Optional<Transaction> transaction = Optional.of(transactionRepository.getReferenceById(id));
        return transaction.orElseThrow(TransactionNotFoundException::new);
    }

    public void addTransaction(Transaction transaction){
        transactionRepository.save(transaction);
    }

    public void updateTransaction(Transaction transaction, UUID id){
        Transaction transactionToUpdate = getTransaction(id);
        transactionToUpdate.setTitle(transaction.getTitle());
        transactionToUpdate.setAmount(transaction.getAmount());
        transactionToUpdate.setTransactionCategory(transaction.getTransactionCategory());
        transactionToUpdate.setPaymentType(transaction.getPaymentType());
        transactionToUpdate.setDateOfTransaction(transaction.getDateOfTransaction());
        transactionRepository.save(transactionToUpdate);
    }
    public void  deleteTransaction(UUID id){
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getExpenses (UUID walletId) {
        return getTransactions(walletId)
                .stream()
                .filter(transaction -> transaction.getAmount().compareTo(BigDecimal.ZERO) == -1)
                .collect(Collectors.toList());
    }

    public List<Transaction> getIncomes(UUID walletId){
        //TODO: FILTER in db-side
        return getTransactions(walletId)
                .stream()
                .filter(transaction -> transaction.getAmount().compareTo(BigDecimal.ZERO) == 1)
                .collect(Collectors.toList());
    }

    public List<Transaction> getTransactionsByDate(UUID walletId,LocalDate date){
        //TODO: FILTER in db-side
        return getTransactions(walletId)
                .stream()
                .filter((transaction -> transaction.getDateOfTransaction().equals(date)))
                .collect(Collectors.toList());
    }

    public Transaction getBiggestTransaction(UUID walletId) {
        List<Transaction> transactions = getTransactions(walletId);
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

    /*public BigDecimal getCurrentBalance() {
        return walletDao.getCurrentBalance();
    }*/
}
