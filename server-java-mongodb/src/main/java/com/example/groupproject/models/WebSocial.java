package com.example.groupproject.models;

// The websocial model designates a website name (such as Facebook) with a url.
public class WebSocial {
    private String siteName;
    private String url;

    public WebSocial(String siteName, String url) {
        this.siteName = siteName;
        this.url = url;
    }
}
