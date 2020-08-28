package com.example.groupproject.models;

import java.util.ArrayList;
import java.util.List;

public class Profile {
    private int id;
    private String firstName;
    private String lastName;
    private final List<String> emails;
    private final List<WebSocial> websites;
    private final List<WebSocial> socials;

    public Profile(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emails = new ArrayList<>();
        this.websites = new ArrayList<>();
        this.socials = new ArrayList<>();
    }

    // Add an email to the object
    public void addEmail(String email) {
        this.emails.add(email);
    }

    // Add a website to the object
    public void addWebsite(String siteName, String url) {
        this.websites.add(new WebSocial(siteName, url));
    }

    // Add a social network
    public void addSocial(String siteName, String url) {
        this.socials.add(new WebSocial(siteName, url));
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<String> getEmails() {
        return this.emails;
    }

    // Get the emails
    public String[] getEmailsAsArray() {
       String[] emails = new String[this.emails.toArray().length];
       for (int i = 0; i < this.emails.toArray().length; i++)  {
           emails[i] = this.emails.get(i);
       }
       return emails;
    }

    // Get the social networks
    public List<WebSocial> getSocials() {
       return this.socials;
    }

    // Get the websites
    public List<WebSocial>getWebsites() {
        return this.websites;
    }


}



