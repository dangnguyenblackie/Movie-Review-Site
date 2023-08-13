import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = ({}) => {
    const revText = useRef();
    const param = useParams();

    const movieId = param.movieId;

    const addReview = (movieId: String, body: String}){

    }


  return (
    <div>Reviews</div>
  )
}

export default Reviews