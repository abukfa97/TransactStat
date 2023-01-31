package com.codecool.transactstat.model;

import lombok.*;

import javax.persistence.*;
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

    private String password;

    private String firstName;

    private String lastName;
    @Enumerated(EnumType.STRING)
    private UserRoles role;

    @OneToMany(mappedBy = "userEntity")
    private List<Wallet> wallets;
}
