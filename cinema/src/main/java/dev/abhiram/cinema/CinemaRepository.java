package dev.abhiram.cinema;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CinemaRepository extends MongoRepository<Cinema, ObjectId> {
    Optional<Cinema> findMovieByImdbId(String imdbId);
}
