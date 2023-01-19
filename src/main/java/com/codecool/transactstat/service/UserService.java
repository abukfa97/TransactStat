package com.codecool.transactstat.service;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.model.dto.DtoFactory;
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
        return DtoFactory.createDTO(searchedUser);
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
               .map(DtoFactory::createDTO)
               .collect(Collectors.toList());
    }

    public Long authenticate(UserDTO user){
        AppUser searched = userRepository.getAppUserByUserName(user.getUserName());
        return searched.getId();
    }
}
