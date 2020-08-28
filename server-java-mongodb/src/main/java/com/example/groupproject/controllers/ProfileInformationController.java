package com.example.groupproject.controllers;
import java.util.List;

import com.example.groupproject.models.ProfileInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.ProfileInformationRepository;

@RestController
@RequestMapping("/profileinfo")
public class ProfileInformationController {

    @Autowired
    ProfileInformationRepository profileInformationRepository;

    @GetMapping()
    public List<ProfileInformation> getProfileInformation() {
        return profileInformationRepository.findAll();
    }

    @PostMapping()
    public ProfileInformation addProject(@RequestBody ProfileInformation profileInformation) {
        return profileInformationRepository.save(profileInformation);
    }

    @DeleteMapping("/{id}")
    public void deleteProfileInformation(@PathVariable String id) {
        profileInformationRepository.deleteById(id);
    }

}