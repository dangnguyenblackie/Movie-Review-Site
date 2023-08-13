import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import {api} from '../../api/axiosConfig'
import { Col, Container, Row } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

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
          const response = await api.post("/api/v1/reviews/add", {
            imdbId: movieId,
            reviewBody: rev
          })

          // Update Reviews
          const updatedReviews = [...reviews,{body:rev.value}]

          // set current rev to null
          rev.value = "";
          setReviews(updatedReviews);
        } catch (error) {
          console.log(error);
        }
    }


  return (
    <Container>
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row>
        <Col>
          <img src={movie.poster} alt='Load Failed'/>
        </Col>
        <Col>
          {
          <>
            <Row>
              <Col>
                <ReviewForm labelText="Write a Review" handleSubmit={addReview} revText={revText}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <hr/>
              </Col>
            </Row>
          </>
          }
          {
            reviews?.map((r)=>{
              return (
                <>
                  <Row>
                    <Col>
                      {r.body}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr/>
                    </Col>
                  </Row>
                </>
                
              )
            })
          }

        </Col>
      </Row>
    </Container>
  )
}

export default Reviews