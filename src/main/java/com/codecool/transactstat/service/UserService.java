package com.codecool.transactstat.service;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.dto.UserDTO;
import com.codecool.transactstat.persistent.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserById(Long id){
        AppUser searchedUser = userRepository.getReferenceById(id);
        return createUserDTO(searchedUser);
    }

    private UserDTO createUserDTO(AppUser user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setUserName(user.getUserName());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        return userDTO;
    }

    public void addUser(AppUser appUser){
        boolean isExisting = userRepository.existsAppUserByUserName(appUser.getUserName());
        if (!isExisting) userRepository.save(appUser);
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

    public List<UserDTO> getUsers() {
       return userRepository.findAll()
               .stream()
               .map(this::createUserDTO)
               .collect(Collectors.toList());
    }
}
