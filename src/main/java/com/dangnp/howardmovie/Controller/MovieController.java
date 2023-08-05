package com.dangnp.howardmovie.Controller;

import com.dangnp.howardmovie.Model.Movie;
import com.dangnp.howardmovie.Model.Review;
import com.dangnp.howardmovie.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/movies")
public class MovieController {
    MovieService movieService;

    @Autowired
    private MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getMovies(){
        return movieService.getAllMovies();
    }

//    @GetMapping("movies/{id}")
//    public Optional<Movie> getMovieById(@PathVariable ObjectId id){
//        return movieService.getMoviebyId(id);
//    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.getMovieByImdbId(imdbId), HttpStatus.OK);
    }

    @PostMapping("/get-movie-reviews")
    public ResponseEntity<List<Review>> getReviewsOfMovie(@RequestBody Map<String, String> payload){
        return new ResponseEntity<List<Review>>(movieService.getMovieReviews(payload.get("imdbId")),
                HttpStatus.OK);
    }
}
