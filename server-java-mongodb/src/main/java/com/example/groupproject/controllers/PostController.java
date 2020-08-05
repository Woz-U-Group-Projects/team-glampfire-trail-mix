package com.example.groupproject.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This controller will handle blog posts

@RestController
@RequestMapping("post")
public class PostController {
    @GetMapping()
    public String test() {
        return ("<h1>post</h1>");
    }
}
