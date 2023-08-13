import { Form, Button } from "react-bootstrap"

const ReviewForm = ({}) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="com.example.howard-movie.review-form">
            <Form.Label>{}</Form.Label>
        </Form.Group>
        <Button variant="outline-info" >Submit</Button>
    </Form>
  )
}

export default ReviewForm