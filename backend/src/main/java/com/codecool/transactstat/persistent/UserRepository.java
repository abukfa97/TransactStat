package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Long> {
    boolean existsUserEntityByUserName(String userName);
    Optional<UserEntity> getUserEntityByUserName(String username);


}
