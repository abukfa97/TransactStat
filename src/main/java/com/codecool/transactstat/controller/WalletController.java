package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value ="/api/wallet")
public class WalletController {

    private final WalletService walletService;

    @Autowired
    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransactions(){
        return walletService.getTransactions();
    }

    @GetMapping("/transactions/date/{date}")
    public List<Transaction> getTransactionsByDate(@PathVariable String date){
        var localDate = LocalDate.parse(date);
        return walletService.getTransactionsByDate(localDate);
    }

    @PostMapping("/transactions")
    public void addTransaction(@RequestBody Transaction transaction){
        walletService.addTransaction(transaction);
    }

    @GetMapping("/transactions/{transactionId}")
    public Transaction getById(@PathVariable(name = "transactionId") String id){
        UUID uuid = UUID.fromString(id);
        return walletService.getTransaction(uuid);
    }

    @PutMapping("/transactions/{transactionId}")
    public void updateTransaction(@PathVariable(name = "transactionId") UUID id,@RequestBody Transaction transaction){
        walletService.updateTransaction(transaction, id);
    }

    @DeleteMapping("/transactions/{transactionId}")
    public void deleteTransaction(@PathVariable(name = "transactionId") UUID id){
        walletService.deleteTransaction(id);
    }

    @GetMapping("/transactions/get-expenses")
    public List<Transaction> getExpenses(){
        return walletService.getExpenses();
    }

    @GetMapping("/transactions/get-biggest-transaction")
    public Transaction getBiggestTransaction(){
        return walletService.getBiggestTransaction().orElseThrow();
    }

}
