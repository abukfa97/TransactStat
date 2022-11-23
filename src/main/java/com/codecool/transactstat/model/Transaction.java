package com.codecool.transactstat.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public class Transaction {
    private final UUID id;
    private String title;
    private BigDecimal amount;
    private LocalDateTime dateOfTransaction;
    private String transactionCategory;
    private  PaymentType paymentType;

    public Transaction(String title,
                       BigDecimal amount,
                       LocalDateTime dateOfTransaction,
                       String transactionCategory,
                       PaymentType paymentType) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.amount = amount;
        this.dateOfTransaction = dateOfTransaction;
        this.transactionCategory = transactionCategory;
        this.paymentType = paymentType;
    }


    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDateTime getDateOfTransaction() {
        return dateOfTransaction;
    }

    public void setDateOfTransaction(LocalDateTime dateOfTransaction) {
        this.dateOfTransaction = dateOfTransaction;
    }

    public String getTransactionCategory() {
        return transactionCategory;
    }

    public void setTransactionCategory(String transactionCategory) {
        this.transactionCategory = transactionCategory;
    }

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }
}
