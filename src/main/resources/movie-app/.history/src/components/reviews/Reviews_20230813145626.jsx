import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = ({}) => {
    const revText = useRef();
    const param = useParams();

    const movieId = param.movieId;


  return (
    <div>Reviews</div>
  )
}

export default Reviews