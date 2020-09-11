package com.example.groupproject.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Document("posts")
public class Post {
    @Id
    private String id;
    private String title;
    private String content;
    private Date createDate;
}
