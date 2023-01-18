package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WalletRepository extends JpaRepository<Wallet,Long> {
    List<Wallet> getWalletsByAppUser(AppUser appUser);
}
