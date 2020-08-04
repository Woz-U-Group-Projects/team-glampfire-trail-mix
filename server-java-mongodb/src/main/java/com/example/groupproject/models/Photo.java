package com.example.groupproject.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "photos")
public class Photo {
    @Id
    private String id;
    private String title;
    private Binary image;

    public Photo(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setImage(Binary image) {
        this.image = image;
    }

    public Binary getImage() {
        return image;
    }

    public String getId() {
        return id;
    }
}
