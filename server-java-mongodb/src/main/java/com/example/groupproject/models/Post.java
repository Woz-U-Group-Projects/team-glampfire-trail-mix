package com.example.groupproject.models;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Post {

    @Id
    private int id;
    private String title;
    private String content;
    private Date createDate;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
