package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
public class WalletController {

    private final TransactionService transactionService;

    @Autowired
    public WalletController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/api/wallet/transactions")
    public List<Transaction> getTransactions(){
        return transactionService.getTransactions();
    }

    @GetMapping("/api/wallet/transactions/date/{date}")
    public List<Transaction> getTransactionsByDate(@PathVariable String date){
        var localDate = LocalDate.parse(date);
        return transactionService.getTransactionsByDate(localDate);
    }

    @PostMapping("/api/wallet/transactions")
    public void addTransaction(@RequestBody Transaction transaction){
        transactionService.addTransaction(transaction);
    }

    @GetMapping("/api/wallet/transactions/{transactionId}")
    public Transaction getById(@PathVariable(name = "transactionId") String id){
        UUID uuid = UUID.fromString(id);
        return transactionService.getTransaction(uuid);
    }

    @PutMapping("/api/wallet/transactions/{transactionId}")
    public void updateTransaction(@PathVariable(name = "transactionId") UUID id,@RequestBody Transaction transaction){
        transactionService.updateTransaction(transaction, id);
    }

    @DeleteMapping("/api/wallet/transactions/{transactionId}")
    public void deleteTransaction(@PathVariable(name = "transactionId") UUID id){
        transactionService.deleteTransaction(id);
    }

    @GetMapping("/api/wallet/transactions/expenses")
    public List<Transaction> getExpenses(){
        return transactionService.getExpenses();
    }

    @GetMapping("/api/wallet/transactions/incomes")
    public List<Transaction> getIncomes(){
        return transactionService.getIncomes();
    }

    @GetMapping("/api/wallet/transactions/biggest-transaction")
    public Transaction getBiggestTransaction(){
        return transactionService.getBiggestTransaction();
    }

    @GetMapping("api/wallet/current-balance")
    public BigDecimal getCurrentBalance(){return transactionService.getCurrentBalance();}

    @ExceptionHandler(TransactionNotFoundException.class)
    public ResponseEntity<?> handleMissingTransaction(){
        return ResponseEntity.notFound().build();
    }


}
