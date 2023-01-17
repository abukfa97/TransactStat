package com.codecool.transactstat.service;

import com.codecool.transactstat.model.User;
import com.codecool.transactstat.persistent.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Long id){
        return userRepository.getReferenceById(id);
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public void deleteUser(User user){
        userRepository.delete(user);
    }

    public void updateUserById(Long id, User user){
        User userToUpdate = getUserById(id);
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setWallets(user.getWallets());
    }
}
