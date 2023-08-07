import './Slide.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const Slide = ({movies}) => {
  return (
    <div className="movie-card-container">
        <Carousel>
            movies.map(
                (movie) => {
                    return (

                    );
                }
            )
        </Carousel>
    </div>
  )
}

export default Slide