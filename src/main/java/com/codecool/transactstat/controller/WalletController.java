package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class WalletController {

    private final WalletService walletService;

    @Autowired
    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @GetMapping("/api/wallet/transactions")
    public List<Transaction> getTransactions(){
        return walletService.getTransactions();
    }

    @PostMapping("/api/wallet/transactions")
    public void addTransaction(@RequestBody Transaction transaction){
        walletService.addTransaction(transaction);
    }

    @GetMapping("api/transactions/{transactionId}")
    public Transaction getById(@PathVariable(name = "transactionId") String id){
        UUID uuid = UUID.fromString(id);
        return walletService.getTransaction(uuid);
    }
}
