package com.dangnp.howardmovie.Controller;

import com.dangnp.howardmovie.Model.Review;
import com.dangnp.howardmovie.Service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {
    ReviewService reviewService;
    @Autowired
    private ReviewController(ReviewService reviewService){
        this.reviewService = reviewService;
    }

    @PostMapping("/get")
    public ResponseEntity<Optional<Review>> getReviewById(@RequestBody Map<String, ObjectId> payload){
        return new ResponseEntity<Optional<Review>>(reviewService.getReviewById(payload.get("id")),
                HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Review> addReview(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Review>(
                reviewService.createNewReview(payload.get("imdbId"), payload.get("reviewBody")),
                HttpStatus.CREATED);
    }
}
