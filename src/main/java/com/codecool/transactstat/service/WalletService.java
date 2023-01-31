package com.codecool.transactstat.service;

import com.codecool.transactstat.model.UserEntity;
import com.codecool.transactstat.model.Wallet;
import com.codecool.transactstat.model.dto.DtoFactory;
import com.codecool.transactstat.model.dto.WalletDTO;
import com.codecool.transactstat.persistent.UserRepository;
import com.codecool.transactstat.persistent.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WalletService {

    private final WalletRepository walletRepository;
    private final UserRepository userRepository;

    @Autowired
    public WalletService(WalletRepository walletRepository, UserRepository userRepository) {
        this.walletRepository = walletRepository;
        this.userRepository = userRepository;
    }

    public List<WalletDTO> getWalletsByUserId(Long userId){
        UserEntity userEntity = userRepository.getReferenceById(userId);
        return walletRepository.getWalletsByAppUser(userEntity)
                .stream()
                .map(DtoFactory::createDTO)
                .collect(Collectors.toList());
    }



    public WalletDTO getWalletById(Long walletId){
        return DtoFactory.createDTO(walletRepository.getReferenceById(walletId));
    }


    public BigDecimal getBalanceByWalletId(Long walletId){
        return  getWalletById(walletId).getBalance();
    }

    public void addWalletByUserId(WalletDTO walletDTO) {
        Wallet wallet = Wallet.builder()
                .userEntity(userRepository.getReferenceById(walletDTO.getAppUserId()))
                .balance(walletDTO.getBalance()).build();
        walletRepository.save(wallet);
    }
}
