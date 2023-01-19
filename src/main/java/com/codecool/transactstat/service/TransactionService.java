package com.codecool.transactstat.service;

import com.codecool.transactstat.controller.TransactionNotFoundException;
import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.model.dto.TransactionDTO;
import com.codecool.transactstat.persistent.TransactionRepository;
import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
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

    public List<Transaction> getTransactions(Long walletId) {
        return transactionRepository.getTransactionsByWallet(walletRepository.getReferenceById(walletId));
    }

    public TransactionDTO createTransactionDTO(Transaction transaction){
        TransactionDTO dto = new TransactionDTO();
        dto.setId(transaction.getId());
        dto.setTitle(transaction.getTitle());
        dto.setWalletId(transaction.getWallet().getId());
        dto.setAmount(transaction.getAmount());
        dto.setDateOfTransaction(transaction.getDateOfTransaction());
        dto.setPaymentType(transaction.getPaymentType());
        dto.setTransactionCategory(transaction.getTransactionCategory());
        return dto;
    }

    public Transaction getTransaction(Long id) {
        Optional<Transaction> transaction = Optional.of(transactionRepository.getReferenceById(id));
        return transaction.orElseThrow(TransactionNotFoundException::new);
    }

    public void addTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
    }

    public void addTransactionByWalletId(TransactionDTO transactionDTO) {
        Transaction newTransaction = Transaction.builder()
                .title(transactionDTO.getTitle())
                .amount(transactionDTO.getAmount())
                .transactionCategory(transactionDTO.getTransactionCategory())
                .dateOfTransaction(transactionDTO.getDateOfTransaction())
                .paymentType(transactionDTO.getPaymentType())
                .wallet(walletRepository.getReferenceById(transactionDTO.getWalletId()))
                .build();
        addTransaction(newTransaction);
    }

    public void updateTransaction(Transaction transaction, Long id) {
        Transaction transactionToUpdate = getTransaction(id);
        transactionToUpdate.setTitle(transaction.getTitle());
        transactionToUpdate.setAmount(transaction.getAmount());
        transactionToUpdate.setTransactionCategory(transaction.getTransactionCategory());
        transactionToUpdate.setPaymentType(transaction.getPaymentType());
        transactionToUpdate.setDateOfTransaction(transaction.getDateOfTransaction());
        transactionRepository.save(transactionToUpdate);
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    public List<Transaction> getExpenses(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return transactionRepository.getTransactionByWalletAndAmountLessThan(wallet, BigDecimal.ZERO);
    }

    public List<Transaction> getIncomes(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return transactionRepository.getTransactionByWalletAndAmountGreaterThan(wallet, BigDecimal.ZERO);
    }

    public List<Transaction> getTransactionsByDate(Long walletId, LocalDate date) {
        //TODO: FILTER in db-side
        return getTransactions(walletId)
                .stream()
                .filter((transaction -> transaction.getDateOfTransaction().equals(date)))
                .collect(Collectors.toList());
    }

    public Transaction getBiggestTransaction(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return transactionRepository.findTopByWalletOrderByAmount(wallet);
    }

}
