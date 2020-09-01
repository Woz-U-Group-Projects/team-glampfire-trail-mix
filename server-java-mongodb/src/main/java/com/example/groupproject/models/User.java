package com.example.groupproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class User {

    @Id
    private String id;
    private String username;
    private String password;
    private String role;
    private String authdata;

    public User() { super(); }

    public User(String id, String username, String password) {
        this();
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public User(String id, String username, String password, String role) {
        this(id, username, password);
        this.role = role;
    }

    public User(String id, String username, String password, String role, String authdata) {
        this(id, username, password, role);
        this.authdata = authdata;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAuthdata() { return authdata; }

    public void setAuthdata(String authdata) { this.authdata = authdata; }
}
