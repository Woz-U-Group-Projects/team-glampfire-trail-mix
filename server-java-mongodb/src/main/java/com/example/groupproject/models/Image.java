package com.example.groupproject.models;

import java.io.InputStream;

public class Image {
    private String filename;
    private InputStream stream;

    public Image() {
        super();
    }

    public Image(String filename, InputStream stream) {
        super();

        this.filename = null;
        this.stream = stream;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public InputStream getStream() {
        return stream;
    }

    public void setStream(InputStream stream) {
        this.stream = stream;
    }
}
