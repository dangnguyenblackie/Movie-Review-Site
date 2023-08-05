package com.dangnp.howardmovie.Service;

import com.dangnp.howardmovie.Model.Review;
import com.dangnp.howardmovie.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public Review createNewReview(String imdbId, String body){

    }
}
