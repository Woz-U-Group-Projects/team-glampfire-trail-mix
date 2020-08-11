package com.example.groupproject.controllers;

import com.example.groupproject.models.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/add")
    public ResponseEntity<String> addImage(@RequestParam("file") MultipartFile file) {
        String id = null;
        try {
            id = imageService.addImage(file);
        } catch (IOException e) {
            return ResponseEntity.badRequest().header("Message", "Error sending image file to database").build();
        }
        return ResponseEntity.ok("/images/" + id);
    }

    @GetMapping("/{id}")
    public void getImage(@PathVariable String id, HttpServletResponse response) {
        try {
            Image image = imageService.getImage(id);
            FileCopyUtils.copy(image.getStream(), response.getOutputStream());
        } catch (Exception ignored) { }
    }
}
