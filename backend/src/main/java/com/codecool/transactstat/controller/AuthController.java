package com.codecool.transactstat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController()
@RequestMapping("/")
public class AuthController {

    @PostMapping("login")
    private ResponseEntity<?> authenticate(HttpServletResponse response){
        return new ResponseEntity<>("Authenticated", HttpStatus.ACCEPTED);
    }
}
