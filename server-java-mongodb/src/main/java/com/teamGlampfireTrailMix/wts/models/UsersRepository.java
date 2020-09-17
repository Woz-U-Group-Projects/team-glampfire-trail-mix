package com.teamGlampfireTrailMix.wts.models;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}
