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

    @GetMapping("api/wallet/current-balance")
    public BigDecimal getCurrentBalance(){return transactionService.getCurrentBalance();}

}
