package dev.abhiram.cinema;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class RatingService {
    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Rating createRating(String ratingBody, String imdbId) {
        Rating rating = ratingRepository.insert(new Rating(ratingBody));

        mongoTemplate.update(Cinema.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(rating))
                .first();

        return rating;
    }
}
