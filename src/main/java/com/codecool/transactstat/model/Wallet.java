package com.codecool.transactstat.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Wallet {

    @Id
    @GeneratedValue
    private  UUID id;

    @OneToMany(mappedBy = "wallet")
    private List<Transaction> transactionList = new ArrayList<>();

    private BigDecimal balance;

}
