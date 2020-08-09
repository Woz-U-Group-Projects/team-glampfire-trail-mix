package com.example.groupproject.controllers;

import java.util.List;

import com.example.groupproject.models.Settings;
import com.example.groupproject.models.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        List<Settings> settings = settingsRepository.findAll();

        if (settings.size() > 0) {
            return settings.get(0);
        } else
            return null;
    }

    @PostMapping()
    public Settings createSettings(@RequestBody Settings settings) {
        return settingsRepository.save(settings);
    }

    @DeleteMapping("/{id}")
    public String deleteSettings(@PathVariable String id) {
        settingsRepository.deleteById(id);
        return "{ \"id\": \"" + id + "\" }";
    }

    @PutMapping("/{id}")
    public Settings updateSettings(@PathVariable String id, @RequestBody Settings settings) {
        Settings foundSettings = settingsRepository.findById(id).orElse(null);
        if (foundSettings != null) {
            foundSettings.setBlogTitle(settings.getBlogTitle());
            foundSettings.setBlogSubTitle(settings.getBlogSubTitle());
            foundSettings.setBlogOwner(settings.getBlogOwner());
            foundSettings.setCopyright(settings.getCopyright());
            foundSettings.setLicense(settings.isLicense());
            foundSettings.setLicenseTitle(settings.getLicenseTitle());
            foundSettings.setLicenseUrl(settings.getLicenseUrl());
            foundSettings.setPoweredBy(settings.isPoweredBy());
            foundSettings.setDisqusId(settings.getDisqusId());
            settingsRepository.save(foundSettings);
            return foundSettings;
        }
        return null;
    }

}