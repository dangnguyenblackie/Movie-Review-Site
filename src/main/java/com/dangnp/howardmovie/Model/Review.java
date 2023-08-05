package com.dangnp.howardmovie.Model;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Review")
public class Review {
    private ObjectId id;
    private String body;

    public Review(String body) {
        this.body = body;
    }

    public Review() {
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "Review{" +
                "body='" + body + '\'' +
                '}';
    }
}
