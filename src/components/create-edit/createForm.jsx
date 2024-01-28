import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Post } from "../services/post";
import './createForm.css'; // Import a separate CSS file for styling
import PostList from "../post-view/postList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { usePost } from "../services/handleRequest/handleRequest";
import { postActions } from "../services/handleRequest/PostActions";
const CreateForm = () => {
  const context=usePost();
  const [FormData, setFormData] = useState({ title: "", description: "", author: "", reaction: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData)
     context.postDispatch({ type: postActions.create, payload: FormData })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId='title' className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" name="title" value={FormData.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='description' className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" name="description" value={FormData.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='author' className='mb-3'>
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" name="author" value={FormData.author} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='reaction' className='mb-3'>
          <Form.Label>Reaction</Form.Label>
          <Form.Control type="number" placeholder="Enter Reaction" name="reaction" value={FormData.reaction} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ cursor: 'pointer' }}>
          Submit
        </Button>
      </Form>
    
    </div>
  );
};

export default CreateForm;
