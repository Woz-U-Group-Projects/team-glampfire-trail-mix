package com.example.groupproject.controllers;

import com.example.groupproject.models.User;
import com.example.groupproject.models.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private UsersRepository repository;
    private final BCryptPasswordEncoder encoder;

    public UserController() {
        super();
        this.encoder = new BCryptPasswordEncoder(12);
    }

    @Autowired
    public UserController(UsersRepository repository) {
        this();
        this.repository = repository;
    }

    @PostMapping()
    public void createUser(@RequestBody User user) {
        User foundUser = repository.findById("0").orElse(null);

        if (foundUser != null) {
            return;
        }

        user.setId("0");
        user.setRole("ADMIN");
        user.setPassword(encoder.encode(user.getPassword()));

        repository.save(user);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<User> authenticate(@RequestBody User user) {
        User foundUser = repository.findById("0").orElse(null);

        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        if (encoder.matches(user.getPassword(), foundUser.getPassword())) {
            foundUser.setPassword("");
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping()
    public User readUser() {
        User foundUser = repository.findById("0").orElse(null);

        if (foundUser == null) return null;

        foundUser.setPassword("");

        return foundUser;
    }

    @PutMapping()
    public User updateUser(@RequestBody User user) {
        User foundUser = repository.findById("0").orElse(null);

        if (foundUser == null) {
            return null;
        }

        foundUser.setUsername(user.getUsername());

        String password = user.getPassword();
        if ( ( password != null ) && ( ! password.isEmpty() ) ) {
            foundUser.setPassword(encoder.encode(password));
        }

        repository.save(foundUser);

        foundUser.setPassword("");
        return foundUser;
    }

}
