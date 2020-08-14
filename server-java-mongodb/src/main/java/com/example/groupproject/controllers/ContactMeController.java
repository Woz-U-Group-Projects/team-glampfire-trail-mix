package com.example.groupproject.controllers;

import java.util.List;

import com.example.groupproject.models.ContactMe;
import com.example.groupproject.models.ContactMeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Task;
import com.example.groupproject.models.TaskRepository;

@RestController
@RequestMapping("/ContactMe")
public class ContactMeController {

    @Autowired
    ContactMeRepository contactMeRepository;

    @GetMapping()
    public List<ContactMe> readMessage() {
        return contactMeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ContactMe readMessage(@PathVariable String id) {
        return contactMeRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public ContactMe createMessage (@RequestBody ContactMe contactMe) {
        return contactMeRepository.save(contactMe);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable String id) {
        contactMeRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public ContactMe updateMessage(@PathVariable String id, @RequestBody ContactMe contactMe) {
        ContactMe foundMessage = contactMeRepository.findById(id).orElse(null);
        if (foundMessage != null) {
            foundMessage.setName(contactMe.getName());
            foundMessage.setEmail(contactMe.getEmail());
            foundMessage.setSubject(contactMe.getSubject());
            foundMessage.setMessage(contactMe.getMessage());
            contactMeRepository.save(foundMessage);
            return foundMessage;
        }
        return null;
    }

}