package com.codecool.transactstat.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
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

    private String title;

    @OneToMany(mappedBy = "wallet")
    private List<Transaction> transactionList;

    @ManyToOne
    private AppUser appUser;

    private BigDecimal balance;

}
