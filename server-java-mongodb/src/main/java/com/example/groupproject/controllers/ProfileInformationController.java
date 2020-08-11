package com.example.groupproject.controllers;
import java.util.List;

import com.example.groupproject.models.ProfileInformation;
import com.example.groupproject.models.Task;
import com.example.groupproject.models.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;

import com.example.groupproject.models.ProfileInformationRepository;

@RestController
@RequestMapping("/ProfileInformation")

public class ProfileInformationController {

    @Autowired
    ProfileInformationRepository ProfileInformationRepository;

    @GetMapping()
    public List<ProfileInformation> getProfileInformation() {
        return ProfileInformationRepository.findAll();
    }

    @PostMapping()
    public ProfileInformation addProject(@RequestBody profileInformation ProfileInformation) {
        return ProfileInformationRepository.save(ProfileInformation);
    }


    @DeleteMapping("/{id}")
    public void deleteProfileInformation(@PathVariable String id) {
        ProfileInformationRepository.deleteById(id);
    }



}