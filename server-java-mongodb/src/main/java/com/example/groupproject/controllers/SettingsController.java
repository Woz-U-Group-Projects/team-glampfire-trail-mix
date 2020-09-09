package com.example.groupproject.controllers;

import com.example.groupproject.models.Settings;
import com.example.groupproject.models.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/settings")
public class SettingsController {

    private final String defaultTheme = "https://www.w3schools.com/lib/w3-theme-w3schools.css";
    private final SettingsRepository settingsRepository;

    @Autowired
    public SettingsController(SettingsRepository settingsRepository) {
        this.settingsRepository = settingsRepository;
    }

    @GetMapping()
    public Settings readSettings() {
        return settingsRepository.findById("0").orElseGet(() -> createSettings(null));
    }

    @PostMapping()
    public Settings createSettings(@RequestBody Settings settings) {
        if (settings == null) {
            Settings newSettings = new Settings();

            newSettings.setId("0");
            newSettings.setBlogTitle("My Blog");
            newSettings.setBlogSubTitle("Blog SubTitle");
            newSettings.setCopyright("Copyright 2020");
            newSettings.setLicense(true);
            newSettings.setLicenseTitle("Creative Commons License");
            newSettings.setLicenseUrl("http://creativecommons.org/licenses/by-sa/4.0/");
            newSettings.setPoweredBy(true);
            newSettings.setTheme(defaultTheme);
            newSettings.setHeadTitle("My Blog");

            return settingsRepository.save(newSettings);
        } else {
            return settingsRepository.save(settings);
        }
    }

    @PutMapping()
    public Settings updateSettings(@RequestBody Settings settings) {
        Settings foundSettings = settingsRepository.findById("0").orElse(null);

        if (foundSettings == null) {
            foundSettings = new Settings();
            foundSettings.setId("0");
        }

        foundSettings.setBlogTitle(settings.getBlogTitle());
        foundSettings.setBlogSubTitle(settings.getBlogSubTitle());
        foundSettings.setCopyright(settings.getCopyright());
        foundSettings.setLicense(settings.isLicense());
        foundSettings.setLicenseTitle(settings.getLicenseTitle());
        foundSettings.setLicenseUrl(settings.getLicenseUrl());
        foundSettings.setPoweredBy(settings.isPoweredBy());
        if (settings.getTheme() == null || settings.getTheme().isEmpty()) {
            foundSettings.setTheme(defaultTheme);
        } else {
            foundSettings.setTheme(settings.getTheme());
        }
        foundSettings.setFacebook(settings.getFacebook());
        foundSettings.setTwitter(settings.getTwitter());
        foundSettings.setInstagram(settings.getInstagram());
        foundSettings.setYoutube(settings.getYoutube());
        foundSettings.setLinkedin(settings.getLinkedin());
        foundSettings.setGithub(settings.getGithub());
        foundSettings.setReddit(settings.getReddit());
        foundSettings.setFavicon(settings.getFavicon());
        foundSettings.setHeadTitle(settings.getHeadTitle());
        settingsRepository.save(foundSettings);

        return foundSettings;
    }

}