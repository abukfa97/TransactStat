package com.codecool.transactstat.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jdk8.LongStreamSerializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import lombok.*;
import org.springframework.cglib.core.Local;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Transaction {

    @Id
    @GeneratedValue
    private  UUID id;
    private String title;
    @ManyToOne()
    private Wallet wallet;
    private BigDecimal amount;
    private LocalDate dateOfTransaction;
    private String transactionCategory;
    @Enumerated(EnumType.STRING)
    private  PaymentType paymentType;
}
