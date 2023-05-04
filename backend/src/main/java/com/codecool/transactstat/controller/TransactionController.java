package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.dto.TransactionDTO;
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
    public List<TransactionDTO> getTransactions(@PathVariable Long walletId){
        return transactionService.getTransactions(walletId);
    }

    @GetMapping("/{walletId}/date/{date}")
    public List<TransactionDTO> getTransactionsByDate(@PathVariable Long walletId, @PathVariable String date){
        var localDate = LocalDate.parse(date);
        return transactionService.getTransactionsByDate(walletId, localDate);
    }

    @PostMapping
    public void addTransaction(@RequestBody TransactionDTO transaction){
        transactionService.addTransaction(transaction);
    }

    @GetMapping("/{transactionId}")
    public Transaction getById(@PathVariable(name = "transactionId") Long id){
        return transactionService.getTransaction(id);
    }

    @PutMapping("/{transactionId}")
    public void updateTransaction(@PathVariable(name = "transactionId") Long id,@RequestBody Transaction transaction){
        transactionService.updateTransaction(transaction, id);
    }

    @DeleteMapping("/{transactionId}")
    public void deleteTransaction(@PathVariable(name = "transactionId") Long id){
        transactionService.deleteTransaction(id);
    }

    @GetMapping("/{walletId}/expenses")
    public List<TransactionDTO> getExpenses(@PathVariable Long walletId){
        return transactionService.getExpenses(walletId);
    }

    @GetMapping("/{walletId}/incomes")
    public List<TransactionDTO> getIncomes(@PathVariable Long walletId){
        return transactionService.getIncomes(walletId);
    }

    @GetMapping("/{walletId}/biggest-transaction")
    public TransactionDTO getBiggestTransaction(@PathVariable Long walletId){
        return transactionService.getBiggestTransaction(walletId);
    }

    /* @PutMapping("/wallet")
    public void addNewTransactionByWalletId(@RequestBody TransactionDTO transactionDTO){
        transactionService.addTransactionByWalletId(transactionDTO);
    }*/

    @ExceptionHandler(TransactionNotFoundException.class)
    public ResponseEntity<?> handleMissingTransaction(){
        return ResponseEntity.notFound().build();
    }

}
