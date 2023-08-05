package com.dangnp.howardmovie.Service;

import com.dangnp.howardmovie.Model.Movie;
import com.dangnp.howardmovie.Model.Review;
import com.dangnp.howardmovie.Repository.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public Optional<Review> getReviewById(ObjectId id){
        return reviewRepository.findById(id);
    }

    public Review createNewReview(String imdbId, String body){
        Review review = reviewRepository.insert(new Review(body));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
