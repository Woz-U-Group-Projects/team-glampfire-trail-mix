package com.example.groupproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private String favicon;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBlogTitle() {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    public String getBlogSubTitle() {
        return blogSubTitle;
    }

    public void setBlogSubTitle(String blogSubTitle) { this.blogSubTitle = blogSubTitle; }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    public boolean isLicense() {
        return license;
    }

    public void setLicense(boolean license) {
        this.license = license;
    }

    public String getLicenseTitle() {
        return licenseTitle;
    }

    public void setLicenseTitle(String licenseTitle) {
        this.licenseTitle = licenseTitle;
    }

    public String getLicenseUrl() {
        return licenseUrl;
    }

    public void setLicenseUrl(String licenseUrl) {
        this.licenseUrl = licenseUrl;
    }

    public boolean isPoweredBy() {
        return poweredBy;
    }

    public void setPoweredBy(boolean poweredBy) {
        this.poweredBy = poweredBy;
    }

    public String getTheme() { return theme; }

    public void setTheme(String theme) { this.theme = theme; }

    public String getFacebook() { return facebook; }

    public void setFacebook(String facebook) { this.facebook = facebook; }

    public String getTwitter() { return twitter; }

    public void setTwitter(String twitter) { this.twitter = twitter; }

    public String getInstagram() { return instagram; }

    public void setInstagram(String instagram) { this.instagram = instagram; }

    public String getYoutube() { return youtube; }

    public void setYoutube(String youtube) { this.youtube = youtube; }

    public String getLinkedin() { return linkedin; }

    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }

    public String getFavicon() { return favicon; }

    public void setFavicon(String favicon) { this.favicon = favicon; }
}
