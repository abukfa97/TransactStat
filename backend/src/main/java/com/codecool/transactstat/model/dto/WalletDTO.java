package com.codecool.transactstat.model.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class WalletDTO {

    private Long id;
    private String title;

    @NonNull
    private Long appUserId;
    private BigDecimal balance;

}
