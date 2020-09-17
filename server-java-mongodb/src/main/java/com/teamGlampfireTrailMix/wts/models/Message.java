package com.teamGlampfireTrailMix.wts.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Document("messages")
public class Message {
    @Id
    private String id;
    private String name;
    private String email;
    private String subject;
    private String message;
    private boolean read;
    private Date createDate;
}
