package com.codecool.transactstat.model.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@Data
public class WalletDTO {

    @NonNull
    private Long appUserId;
    private BigDecimal balance;

}
