package com.codecool.transactstat.service;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.dto.UserDTO;
import com.codecool.transactstat.persistent.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserById(Long id){
        AppUser searchedUser = userRepository.getReferenceById(id);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(searchedUser.getId());
        userDTO.setUserName(searchedUser.getUserName());
        userDTO.setFirstName(searchedUser.getFirstName());
        userDTO.setLastName(searchedUser.getLastName());
        return userDTO;
    }

    public void addUser(AppUser appUser){
        userRepository.save(appUser);
    }

    public void deleteUserById(Long userId){
        userRepository.delete(userRepository.getReferenceById(userId));
    }

    public void updateUserById(Long id, UserDTO appUser){
        AppUser appUserToUpdate = userRepository.getReferenceById(id);
        appUserToUpdate.setUserName(appUser.getUserName());
        appUserToUpdate.setFirstName(appUser.getFirstName());
        appUserToUpdate.setLastName(appUser.getLastName());
    }

    public List<AppUser> getUsers() {
        return userRepository.findAll();
    }
}
