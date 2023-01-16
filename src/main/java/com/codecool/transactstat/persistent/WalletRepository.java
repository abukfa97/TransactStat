package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface WalletRepository extends JpaRepository<Wallet,UUID> {
}
