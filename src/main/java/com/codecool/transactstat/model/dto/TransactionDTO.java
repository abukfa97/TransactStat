package com.codecool.transactstat.model.dto;

import com.codecool.transactstat.model.PaymentType;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TransactionDTO {

    private Long id;

    private String title;

    @NonNull
    private Long walletId;

    private BigDecimal amount;
    private LocalDate dateOfTransaction;
    private String transactionCategory;
    private PaymentType paymentType;
}
