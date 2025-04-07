package dev.abhiram.cinema;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "ratings")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rating {
    @Id
    private ObjectId id;
    private String body;

    public Rating(String body) {
        this.body = body;
    }
}
