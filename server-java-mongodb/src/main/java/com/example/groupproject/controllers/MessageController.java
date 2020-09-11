package com.example.groupproject.controllers;

import java.util.Date;
import java.util.List;

import com.example.groupproject.models.Message;
import com.example.groupproject.models.MessagesRepository;
import com.example.groupproject.models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessagesRepository messagesRepository;

    @Autowired
    public MessageController(MessagesRepository messagesRepository) {
        this.messagesRepository = messagesRepository;
    }

    @GetMapping()
    public List<Message> readMessages() {
        return messagesRepository.findAll();
    }

    @GetMapping("/{id}")
    public Message readMessage(@PathVariable String id) {
        return messagesRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public Message createMessage (@RequestBody Message message) {
        message.setCreateDate(new Date());
        return messagesRepository.save(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable String id) {
        messagesRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Message updateMessage(@PathVariable String id, @RequestBody Message message) {
        Message foundMessage = messagesRepository.findById(id).orElse(null);
        if (foundMessage != null) {
            foundMessage.setName(message.getName());
            foundMessage.setEmail(message.getEmail());
            foundMessage.setSubject(message.getSubject());
            foundMessage.setMessage(message.getMessage());
            foundMessage.setRead(message.isRead());
            messagesRepository.save(foundMessage);
            return foundMessage;
        }
        return null;
    }

}