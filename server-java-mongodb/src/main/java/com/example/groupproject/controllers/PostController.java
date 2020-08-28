package com.example.groupproject.controllers;

import java.util.List;

import com.example.groupproject.models.Post;
import com.example.groupproject.models.PostRepository;
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
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostRepository postRepository;

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postRepository.save(post);
    }
    
    @GetMapping()
    public List<Post> getPosts() {
      return postRepository.findAll();
    
    } 
    
    @GetMapping("/{id}")
    public Post getPost(@PathVariable String id) {    
    	Post post=postRepository.findById(id).orElse(null); 
    return post;
    
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id,@RequestBody Post post) {
    	Post foundPost = postRepository.findById(id).orElse(null);
        if (foundPost != null) {
        	foundPost.setTitle(post.getTitle());
        	foundPost.setContent(post.getContent());
        	foundPost.setCreateDate(post.getCreateDate());
          postRepository.save(foundPost);
          return foundPost;
        }
    	return null;
    	
    }
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id) {
      postRepository.deleteById(id);
    }
    
    

    }
