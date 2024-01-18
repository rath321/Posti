import { useState } from "react"
import { Form, Button } from "react-bootstrap";
import { Post } from "../services/post";
const CreateForm=(props)=>{
    const [state, setState]=useState({title:"", description:"",author:"", reaction:0 });
   const handleSubmit=(e)=>
    {
        e.preventDefault();
     
       props.addPost(state);
    }
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        // console.log(state)
        setState((prevState) => (
        
            {
            ...prevState,
            [name]: value,
        }));
        // console.log(state)
    };
    return (
        <div className="col-sm-6 offset-sm-3">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='title' className='mb-3'>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title"
                  name="title"  value={state.title} onChange={handleChange} />
               
            </Form.Group>
            <Form.Group controlId='description' className='mb-3'>
                <Form.Label>description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description"
                  name="description"  value={state.description} onChange={handleChange} />
               
            </Form.Group>
            <Form.Group controlId='author' className='mb-3'>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author"
                name="author"    value={state.author} onChange={handleChange} />
               
            </Form.Group>
            <Form.Group controlId='reaction' className='mb-3'>
                <Form.Label>Reaction</Form.Label>
                <Form.Control type="number" placeholder="Enter Reaction"
                  name="reaction"  value={state.reaction} onChange={handleChange} />
               
            </Form.Group>
            <Button variant="primary" type="submit" 
                style={{cursor: 'pointer'}}>
                Login
            </Button>
        </Form>
    </div>

         

    )


}
export default CreateForm;