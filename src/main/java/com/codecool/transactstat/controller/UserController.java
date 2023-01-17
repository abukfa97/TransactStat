package com.codecool.transactstat.controller;

import com.codecool.transactstat.model.User;
import com.codecool.transactstat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users/{userId}")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public User getUserById(@PathVariable Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping
    public void registerNewUser(@PathVariable Long userId, @RequestBody User user){
        userService.updateUserById(userId, user);
    }
}
