package com.teamGlampfireTrailMix.wts.models;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProfileInformationRepository extends MongoRepository<ProfileInformation, String>
{


    Optional<Object> findById(Integer id);



}
