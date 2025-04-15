package dev.abhiram.cinema;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CinemaService {
    @Autowired
    private CinemaRepository cinemaRepository;

    public List<Cinema> allMovies() {
        return cinemaRepository.findAll();
    }

    public Optional<Cinema> singleCinema(String imdbId) {
        return cinemaRepository.findMovieByImdbId(imdbId);
    }
}
