package com.codecool.transactstat.service;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.model.dto.WalletDTO;
import com.codecool.transactstat.persistent.UserRepository;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class WalletService {

    private final WalletRepository walletRepository;
    private final UserRepository userRepository;

    @Autowired
    public WalletService(WalletRepository walletRepository, UserRepository userRepository) {
        this.walletRepository = walletRepository;
        this.userRepository = userRepository;
    }

    public List<Wallet> getWalletsByUserId(Long userId){
        AppUser appUser = userRepository.getReferenceById(userId);
        return walletRepository.getWalletsByAppUser(appUser);
    }

    public WalletDTO createWalletDTO(Wallet wallet){
        WalletDTO dto = new WalletDTO();
        dto.setId(wallet.getId());
        dto.setAppUserId(wallet.getAppUser().getId());
        dto.setBalance(wallet.getBalance());
        return dto;
    }

    public Wallet getWalletById(Long walletId){
        return walletRepository.getReferenceById(walletId);
    }


    public BigDecimal getBalanceByWalletId(Long walletId){
        return  getWalletById(walletId).getBalance();
    }

    public void addWalletByUserId(WalletDTO walletDTO) {
        Wallet wallet = Wallet.builder()
                .appUser(userRepository.getReferenceById(walletDTO.getAppUserId()))
                .balance(walletDTO.getBalance()).build();
        walletRepository.save(wallet);
    }
}
