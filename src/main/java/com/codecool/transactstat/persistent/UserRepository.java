package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Long> {
    boolean existsAppUserByUserName(String userName);
    UserEntity getAppUserByUserName(String username);
}
