package com.codecool.transactstat.model.dto;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.Transaction;
import com.codecool.transactstat.model.Wallet;

public class DtoFactory {

    public static TransactionDTO createDTO(Transaction transaction){
        TransactionDTO dto = new TransactionDTO();
        dto.setId(transaction.getId());
        dto.setTitle(transaction.getTitle());
        dto.setWalletId(transaction.getWallet().getId());
        dto.setAmount(transaction.getAmount());
        dto.setDateOfTransaction(transaction.getDateOfTransaction());
        dto.setPaymentType(transaction.getPaymentType());
        dto.setTransactionCategory(transaction.getTransactionCategory());
        return dto;
    }

    public static WalletDTO createDTO(Wallet wallet){
        WalletDTO dto = new WalletDTO();
        dto.setId(wallet.getId());
        dto.setAppUserId(wallet.getAppUser().getId());
        dto.setBalance(wallet.getBalance());
        return dto;
    }

    public static UserDTO createDTO(AppUser user){
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUserName(user.getUserName());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        return dto;
    }
}
