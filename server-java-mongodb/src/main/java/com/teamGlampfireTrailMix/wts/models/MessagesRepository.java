package com.teamGlampfireTrailMix.wts.models;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessagesRepository extends MongoRepository<Message, String> {

}