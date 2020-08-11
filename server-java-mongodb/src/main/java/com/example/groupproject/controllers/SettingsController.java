package com.example.groupproject.controllers;

import java.util.List;

import com.example.groupproject.models.Settings;
import com.example.groupproject.models.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/settings")
public class SettingsController {

    @Autowired
    SettingsRepository settingsRepository;

    @GetMapping()
    public Settings readSettings() {
        Settings settings = settingsRepository.findById("0").orElse(null);

        if (settings == null) {
            return createSettings(null);
        } else {
            return settings;
        }
    }

    @PostMapping()
    public Settings createSettings(@RequestBody Settings settings) {
        Settings foundSettings = settingsRepository.findById("0").orElse(null);

        if (foundSettings == null) {
            foundSettings = new Settings();

            foundSettings.setId("0");
            foundSettings.setBlogTitle("Banana News Network");
            foundSettings.setBlogSubTitle("Because life is full of bananas and nuts");
            foundSettings.setBlogOwner("Banana Man");
            foundSettings.setCopyright("Copyright 2020 by " + foundSettings.getBlogOwner());
            foundSettings.setLicense(true);
            foundSettings.setLicenseTitle("Creative Commons License");
            foundSettings.setLicenseUrl("http://creativecommons.org/licenses/by-sa/4.0/");
            foundSettings.setPoweredBy(true);
            foundSettings.setDisqusId("");
            foundSettings.setTheme("bootstrap.min.css");

            return settingsRepository.save(foundSettings);
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
        foundSettings.setBlogOwner(settings.getBlogOwner());
        foundSettings.setCopyright(settings.getCopyright());
        foundSettings.setLicense(settings.isLicense());
        foundSettings.setLicenseTitle(settings.getLicenseTitle());
        foundSettings.setLicenseUrl(settings.getLicenseUrl());
        foundSettings.setPoweredBy(settings.isPoweredBy());
        foundSettings.setDisqusId(settings.getDisqusId());
        foundSettings.setTheme(settings.getTheme());
        settingsRepository.save(foundSettings);

        return foundSettings;
    }

}