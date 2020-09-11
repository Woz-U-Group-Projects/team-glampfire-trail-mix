package com.example.groupproject.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Document("settings")
public class Settings {
    @Id
    private String id;
    private String blogTitle;
    private String blogSubTitle;
    private String copyright;
    private boolean license;
    private String licenseTitle;
    private String licenseUrl;
    private boolean poweredBy;
    private String theme;
    private String facebook;
    private String twitter;
    private String instagram;
    private String youtube;
    private String linkedin;
    private String github;
    private String reddit;
    private String favicon;
    private String headTitle;
}
