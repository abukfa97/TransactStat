package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet,Long> {
}
