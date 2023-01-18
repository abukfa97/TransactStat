package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class WalletController {

    private final WalletService walletService;

    @Autowired
    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @GetMapping("api/{walletId}/balance")
    public BigDecimal getCurrentBalance(@PathVariable Long walletId){
        return walletService.getBalanceByWalletId(walletId);
    }

    @GetMapping("api/wallets/{userId}")
    public List<Wallet> getWalletsByUserId(@PathVariable Long userId){
        return walletService.getWalletsByUserId(userId);
    }

}
