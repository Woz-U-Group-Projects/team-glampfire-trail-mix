package com.example.groupproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Settings")
public class Settings {
    @Id
    private String id;
    private String blogTitle;
    private String blogSubTitle;
    private String blogOwner;
    private String copyright;
    private boolean license;
    private String licenseTitle;
    private String licenseUrl;
    private boolean poweredBy;
    private String disqusId;
    private String theme;

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

    public void setBlogSubTitle(String blogSubTitle) {
        this.blogSubTitle = blogSubTitle;
    }

    public String getBlogOwner() { return blogOwner; }

    public void setBlogOwner(String blogOwner) { this.blogOwner = blogOwner; }

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

    public String getDisqusId() {
        return disqusId;
    }

    public void setDisqusId(String disqusId) {
        this.disqusId = disqusId;
    }

    public String getTheme() { return theme; }

    public void setTheme(String theme) { this.theme = theme; }
}
