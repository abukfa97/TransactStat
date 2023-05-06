package com.codecool.transactstat.service;

import com.codecool.transactstat.model.UserEntity;
import com.codecool.transactstat.model.UserRoles;
import com.codecool.transactstat.model.dto.DtoFactory;
import com.codecool.transactstat.model.dto.UserDTO;
import com.codecool.transactstat.persistent.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO getUserById(Long id){
        UserEntity searchedUser = userRepository.getReferenceById(id);
        return DtoFactory.createDTO(searchedUser);
    }

    public UserDTO getUserByUsername(String username){
        return DtoFactory.createDTO(userRepository.getUserEntityByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException(username)));
    }

    public void addUser(UserEntity userEntity){
        boolean isExisting = userRepository.existsUserEntityByUserName(userEntity.getUserName());
        if (!isExisting) {
            log.info("***** CREATED USER {} *****", userEntity.getUserName());
            userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
            userEntity.setRole(UserRoles.ROLE_USER);
            userRepository.save(userEntity);
        }
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

    /*public Optional<Long> authenticate(UserDTO user){
        UserEntity searched = userRepository.getUserEntityByUserName(user.getUserName()).
                orElseThrow(() -> new UsernameNotFoundException(user.getUserName()));
        return Optional.ofNullable(searched).map(UserEntity::getId);
    } */

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.getUserEntityByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(user.getRole().name()));
        return new User(user.getUserName(),user.getPassword(), roles);
    }
}
