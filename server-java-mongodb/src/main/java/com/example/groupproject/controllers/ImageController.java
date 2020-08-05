package com.example.groupproject.controllers;

import com.example.groupproject.models.Image;
import com.example.groupproject.controllers.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/images/add")
    public String addImage(@RequestParam("file") MultipartFile file) throws IOException {
        String id = imageService.addImage(file);
        return "redirect:/images/" + id;
    }

    @GetMapping("/images/{id}")
    public void getImage(@PathVariable String id, HttpServletResponse response) throws IOException {
        Image image = imageService.getImage(id);
        FileCopyUtils.copy(image.getStream(), response.getOutputStream());
    }
}
