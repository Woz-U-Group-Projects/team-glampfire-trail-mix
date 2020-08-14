package com.example.groupproject.models;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactMeRepository extends MongoRepository<ContactMe, String> {

}