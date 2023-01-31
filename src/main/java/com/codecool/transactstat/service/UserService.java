package com.codecool.transactstat.service;

import com.codecool.transactstat.model.UserEntity;
import com.codecool.transactstat.model.dto.DtoFactory;
import com.codecool.transactstat.model.dto.UserDTO;
import com.codecool.transactstat.persistent.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserById(Long id){
        UserEntity searchedUser = userRepository.getReferenceById(id);
        return DtoFactory.createDTO(searchedUser);
    }

    public void addUser(UserEntity userEntity){
        boolean isExisting = userRepository.existsAppUserByUserName(userEntity.getUserName());
        if (!isExisting) userRepository.save(userEntity);
    }

    public void deleteUserById(Long userId){
        userRepository.delete(userRepository.getReferenceById(userId));
    }

    public void updateUserById(Long id, UserDTO appUser){
        UserEntity userEntityToUpdate = userRepository.getReferenceById(id);
        userEntityToUpdate.setUserName(appUser.getUserName());
        userEntityToUpdate.setFirstName(appUser.getFirstName());
        userEntityToUpdate.setLastName(appUser.getLastName());
    }

    public List<UserDTO> getUsers() {
       return userRepository.findAll()
               .stream()
               .map(DtoFactory::createDTO)
               .collect(Collectors.toList());
    }

    public Optional<Long> authenticate(UserDTO user){
        UserEntity searched = userRepository.getAppUserByUserName(user.getUserName());
        return Optional.ofNullable(searched).map(UserEntity::getId);
    }
}
