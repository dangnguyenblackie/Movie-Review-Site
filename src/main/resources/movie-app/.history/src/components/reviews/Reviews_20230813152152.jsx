import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = ({movie, reviews, getMovie, setReviews}) => {
    const revText = useRef();
    const param = useParams();

    const movieId = param.movieId;

    useEffect(()=>{
      getMovie()
    },[])


    const addReview = async ({movieId, body}) => {
        
    }


  return (
    <div>Reviews</div>
  )
}

export default Reviews