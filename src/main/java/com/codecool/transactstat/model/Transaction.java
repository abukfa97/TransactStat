package com.codecool.transactstat.model;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Transaction {

    @Id
    @GeneratedValue
    private  Long id;
    private String title;
    @ManyToOne()
    private Wallet wallet;
    private BigDecimal amount;
    private LocalDate dateOfTransaction;
    private String transactionCategory;
    @Enumerated(EnumType.STRING)
    private  PaymentType paymentType;
}
