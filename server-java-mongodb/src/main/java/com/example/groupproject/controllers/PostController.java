package com.example.groupproject.controllers;

import java.util.*;

import com.example.groupproject.models.Post;
import com.example.groupproject.models.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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

    private final PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        String slug = post.getTitle().replaceAll("[^A-Za-z0-9 ]", "").replaceAll(" ", "-").toLowerCase();
        Post foundPost = postRepository.findById(slug).orElse(null);

        if (foundPost != null) {
            Calendar cal = new GregorianCalendar();
            slug += "-" + cal.get(Calendar.YEAR);
            foundPost = postRepository.findById(slug).orElse(null);

            if (foundPost != null) {
                slug = slug.substring(0, slug.length() - 4) + cal.getTimeInMillis();
            }
        }

        post.setId(slug);
        post.setCreateDate(new Date());
        return postRepository.save(post);
    }

    @GetMapping()
    public List<Post> readPosts() {
        List<Post> posts = postRepository.findAll(new Sort(new Sort.Order(Sort.Direction.DESC, "createDate")));

        for(Post post : posts) {
            post.setContent(getSnippet(post));
        }

        return posts;
    }

    private String getSnippet(Post post) {
        String text = post.getContent().replaceAll("(?s)<[^>]*>(\\s*<[^>]*>)*", " ");
        String[] words = text.split(" ");

        int length = 24;
        if (words.length < length) length = words.length;

        String snippet = String.join(" ", Arrays.copyOfRange(words, 0, length));
        if (words.length > length) snippet += "...";

        return snippet;
    }

    @GetMapping("/{id}")
    public Post readPost(@PathVariable String id) {
        return postRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, @RequestBody Post post) {
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
