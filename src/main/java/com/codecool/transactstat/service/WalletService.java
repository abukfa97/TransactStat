package com.codecool.transactstat.service;

import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class WalletService {

    private final WalletRepository walletRepository;

    @Autowired
    public WalletService(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }

    public Wallet getWalletById(Long walletId){
        return walletRepository.getReferenceById(walletId);
    }


    public BigDecimal getBalanceByWalletId(Long walletId){
        return  getWalletById(walletId).getBalance();
    }
}
