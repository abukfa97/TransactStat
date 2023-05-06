package com.codecool.transactstat.service;

import com.codecool.transactstat.controller.TransactionNotFoundException;
import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.model.dto.DtoFactory;
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

    public List<TransactionDTO> getTransactions(Long walletId) {

        return transactionRepository.getTransactionsByWallet(walletRepository.getReferenceById(walletId))
                .stream()
                .map((DtoFactory::createDTO))
                .collect(Collectors.toList());
    }

    public Transaction getTransaction(Long id) {
        Optional<Transaction> transaction = Optional.of(transactionRepository.getReferenceById(id));
        return transaction.orElseThrow(TransactionNotFoundException::new);
    }

    public void addTransaction(TransactionDTO dto) {
        Transaction transaction = Transaction.builder()
                .title(dto.getTitle())
                .amount(dto.getAmount())
                .wallet(walletRepository.getReferenceById(dto.getWalletId()))
                .paymentType(dto.getPaymentType())
                .dateOfTransaction(dto.getDateOfTransaction())
                .transactionCategory(dto.getTransactionCategory()).build();
        transactionRepository.save(transaction);
    }

    /* public void addTransactionByWalletId(TransactionDTO transactionDTO) {
        Transaction newTransaction = Transaction.builder()
                .title(transactionDTO.getTitle())
                .amount(transactionDTO.getAmount())
                .transactionCategory(transactionDTO.getTransactionCategory())
                .dateOfTransaction(transactionDTO.getDateOfTransaction())
                .paymentType(transactionDTO.getPaymentType())
                .wallet(walletRepository.getReferenceById(transactionDTO.getWalletId()))
                .build();
        transactionRepository.save(newTransaction);
    } */

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

    public List<TransactionDTO> getExpenses(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return transactionRepository.getTransactionByWalletAndAmountLessThan(wallet, BigDecimal.ZERO)
                .stream()
                .map(DtoFactory::createDTO).collect(Collectors.toList());
    }

    public List<TransactionDTO> getIncomes(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return transactionRepository.getTransactionByWalletAndAmountGreaterThan(wallet, BigDecimal.ZERO)
                .stream()
                .map(DtoFactory::createDTO).collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByDate(Long walletId, LocalDate date) {
        //TODO: FILTER in db-side
        return getTransactions(walletId)
                .stream()
                .filter((transaction -> transaction.getDateOfTransaction().equals(date)))
                .collect(Collectors.toList());
    }

    public TransactionDTO getBiggestTransaction(Long walletId) {
        Wallet wallet = walletRepository.getReferenceById(walletId);
        return DtoFactory.createDTO(transactionRepository.findTopByWalletOrderByAmount(wallet));
    }

}
