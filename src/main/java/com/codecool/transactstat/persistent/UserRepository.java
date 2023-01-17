package com.codecool.transactstat.persistent;

import com.codecool.transactstat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
