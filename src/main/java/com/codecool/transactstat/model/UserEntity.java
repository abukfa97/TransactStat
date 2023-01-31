package com.codecool.transactstat.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String userName;

    private String firstName;

    private String lastName;

    @OneToMany(mappedBy = "userEntity")
    private List<Wallet> wallets;
}
