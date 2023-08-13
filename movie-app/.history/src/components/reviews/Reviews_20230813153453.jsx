import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import {api} from '../../api/axiosConfig'

const Reviews = ({movie, reviews, getMovie, setReviews}) => {
    const revText = useRef();
    const param = useParams();

    const movieId = param.movieId;

    useEffect(()=>{
      getMovie(movieId)
    },[])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText?.current;
        try {
          const response = await api.post()
        } catch (error) {
          console.log(error);
        }
    }


  return (
    <div>Reviews</div>
  )
}

export default Reviews