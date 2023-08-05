package com.dangnp.howardmovie.Service;

import com.dangnp.howardmovie.Model.Movie;
import com.dangnp.howardmovie.Model.Review;
import com.dangnp.howardmovie.Repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    MovieRepository movieRepository;
    @Autowired
    private MovieService(MovieRepository movieRepository){
        this.movieRepository=movieRepository;
    }

    public List<Movie> getAllMovies(){
        try {
            return movieRepository.findAll();
        }
        catch(Exception e){
            return null;
        }
    }

    public Optional<Movie> getMovieById(ObjectId id){
            return movieRepository.findById(id);
    }

    public Optional<Movie> getMovieByImdbId(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }

    public List<Review> getMovieReviews(String imdbId){
        Optional<Movie> movie = getMovieByImdbId(imdbId);

        if (movie.isEmpty()){
            System.out.println("Fail");
            return null;
        }
        System.out.println(movie);
        return movie.get().getReviewIds();
    }

}
