package com.example.groupproject.models;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Document("profileinfo")
public class ProfileInformation {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String pic;
    private int age;
    private String[] languages;
    private String bio;
    private String email;
    private String facebook;
    private String twitter;
    private String instagram;
    private String youtube;
    private String linkedin;
    private String github;
    private String reddit;
}
