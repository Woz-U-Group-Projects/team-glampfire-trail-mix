package com.example.groupproject.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.InputStream;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Image {
    private String filename;
    private InputStream stream;
}
