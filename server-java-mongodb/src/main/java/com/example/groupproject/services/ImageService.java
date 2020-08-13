package com.example.groupproject.services;

import com.example.groupproject.models.Image;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@Service
public class ImageService {

  @Autowired
  private GridFsTemplate gridFsTemplate;

  @Autowired
  private GridFsOperations operations;

  public String addImage(MultipartFile file) throws IOException {
    DBObject metaData = new BasicDBObject();
    metaData.put("type", "image");
    metaData.put("filename", file.getOriginalFilename());
    ObjectId id = gridFsTemplate.store(
            file.getInputStream(), file.getOriginalFilename(), file.getContentType(), metaData);
    return id.toString();
  }

  public Image getImage(String id) throws IOException {
    GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
    Image image = new Image();
    image.setFilename(file.getMetadata().get("filename").toString());
    image.setStream(operations.getResource(file).getInputStream());
    return image;
  }

}
