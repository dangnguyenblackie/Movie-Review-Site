import { Form, Button } from "react-bootstrap"

const ReviewForm = ({labelText, revText, handleSubmit, defaultValue }) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="com.example.howard-movie.review-form">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" defaultValue={} placeholder="Enter a Review" />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm