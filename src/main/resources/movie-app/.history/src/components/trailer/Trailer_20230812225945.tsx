import { useParams } from "react-router-dom"

const Trailer = () => {

  const param = useParams();
  const key = param.ytTrailerId;

  return (
    <div>Trailer</div>
  )
}

export default Trailer