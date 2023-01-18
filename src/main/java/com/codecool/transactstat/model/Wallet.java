package com.codecool.transactstat.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Wallet {

    @Id
    @GeneratedValue
    private  Long id;

    @OneToMany(mappedBy = "wallet")
    private List<Transaction> transactionList = new ArrayList<>();

    @ManyToOne
    private User user;

    private BigDecimal balance;

}
