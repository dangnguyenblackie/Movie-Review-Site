import './Slide.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const Slide = ({movies}) => {
  return (
    <div className="movie-carousel-container">
        <Carousel>
            movies.map(
                (movie) => {
                    return (
                        <Paper>
                            <div className="movie-card-container">
                                <div className="movie-card">
                                    <div className="movie-card-detail">
                                        <div className="movie-card-poster">

                                        </div>
                                        <div className="movie-card-title">

                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Paper>
                    );
                }
            )
        </Carousel>
    </div>
  )
}

export default Slide