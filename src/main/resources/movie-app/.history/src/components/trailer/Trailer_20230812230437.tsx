import ReactPlayer from "react-player";
import { useParams } from "react-router-dom"

const Trailer = () => {

  const param = useParams();
  const key = param.ytTrailerId;

  const trailerPlayer = (key!=null)? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} style={{width:"100%", height:"100%"}}/>:null;

  return (
    <div>Trailer</div>
  )
}

export default Trailer