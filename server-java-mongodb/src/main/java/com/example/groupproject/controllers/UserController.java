package com.example.groupproject.controllers;

import com.example.groupproject.models.User;
import com.example.groupproject.models.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        User foundUser = repository.findByUsername(user.getUsername());

        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        if (encoder.matches(user.getPassword(), foundUser.getPassword()) && (foundUser.getRole().equals("ADMIN"))) {
            foundUser.setPassword("");
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping()
    public ResponseEntity<List<User>> readUsers() {
        List<User> users = repository.findAll();

        if (users.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        for (User user : users) {
            user.setPassword("");
        }

        return ResponseEntity.ok(users);
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> readUser(@PathVariable String username) {
        User foundUser = repository.findByUsername(username);

        if (foundUser == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        foundUser.setPassword("");

        return ResponseEntity.ok(foundUser);
    }

    @GetMapping("/registered")
    public String isRegistered() {
        List<User> users = repository.findAll();
        boolean registered =  users.size() > 0;

        return "{ \"status\": " + registered + " }";
    }

    @PutMapping("/{username}")
    public ResponseEntity<User> updateUser(@PathVariable String username, @RequestBody User user) {
        User foundUser = repository.findByUsername(username);

        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        foundUser.setUsername(user.getUsername());

        String password = user.getPassword();
        if ( ( password != null ) && ( ! password.isEmpty() ) ) {
            foundUser.setPassword(encoder.encode(password));
        }

        foundUser.setRole(user.getRole());

        repository.save(foundUser);

        foundUser.setPassword("");
        return ResponseEntity.ok(foundUser);
    }

}
