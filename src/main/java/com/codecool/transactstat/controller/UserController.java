package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.AppUser;
import com.codecool.transactstat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<AppUser> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public AppUser getUserById(@PathVariable Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping
    public void registerNewUser(@RequestBody AppUser appUser){
        userService.addUser(appUser);
    }

    @PutMapping("/{userId}")
    public void updateUserById(@PathVariable Long userId, @RequestBody AppUser appUser){
        userService.updateUserById(userId, appUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable Long userId){
        userService.deleteUserById(userId);
    }
}
