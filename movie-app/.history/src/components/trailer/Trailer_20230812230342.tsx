import ReactPlayer from "react-player";
import { useParams } from "react-router-dom"

const Trailer = () => {

  const param = useParams();
  const key = param.ytTrailerId;

  const trailerPlayer = (key!=null)? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}

  return (
    <div>Trailer</div>
  )
}

export default Trailer