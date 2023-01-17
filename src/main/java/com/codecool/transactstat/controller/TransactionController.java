package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/{walletId}/transactions")
    public List<Transaction> getTransactions(@PathVariable Long walletId){
        return transactionService.getTransactions(walletId);
    }

    @GetMapping("/{walletId}/date/{date}")
    public List<Transaction> getTransactionsByDate(@PathVariable Long walletId, @PathVariable String date){
        var localDate = LocalDate.parse(date);
        return transactionService.getTransactionsByDate(walletId, localDate);
    }

    @PostMapping("/wallet")
    public void addTransaction(@RequestBody Transaction transaction){
        transactionService.addTransaction(transaction);
    }

    @GetMapping("/wallet/{transactionId}")
    public Transaction getById(@PathVariable(name = "transactionId") Long id){
        return transactionService.getTransaction(id);
    }

    @PutMapping("/wallet/{transactionId}")
    public void updateTransaction(@PathVariable(name = "transactionId") Long id,@RequestBody Transaction transaction){
        transactionService.updateTransaction(transaction, id);
    }

    @DeleteMapping("/wallet/{transactionId}")
    public void deleteTransaction(@PathVariable(name = "transactionId") Long id){
        transactionService.deleteTransaction(id);
    }

    @GetMapping("/{walletId}/expenses")
    public List<Transaction> getExpenses(@PathVariable Long walletId){
        return transactionService.getExpenses(walletId);
    }

    @GetMapping("/{walletId}/incomes")
    public List<Transaction> getIncomes(@PathVariable Long walletId){
        return transactionService.getIncomes(walletId);
    }

    @GetMapping("/{walletId}/biggest-transaction")
    public Transaction getBiggestTransaction(@PathVariable Long walletId){
        return transactionService.getBiggestTransaction(walletId);
    }

    @ExceptionHandler(TransactionNotFoundException.class)
    public ResponseEntity<?> handleMissingTransaction(){
        return ResponseEntity.notFound().build();
    }

}
