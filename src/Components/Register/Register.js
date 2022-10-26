import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGooglePlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/ContextProvider';

const Register = () => {
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);

        // create user
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully create an account');
                form.reset()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className='w-50 mx-auto mt-4 form-container'>
            <h4 className='text-center mb-4'>Sign Up Account</h4>
            <Form onSubmit={handleSubmit} className='form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="user name" className='input-field' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="user photo url" className='input-field' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="user email" className='input-field' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="password" className='input-field' required />
                </Form.Group>


                <Button variant="primary" type="submit" className='w-100 my-2 '>
                    Sign Up
                </Button>
            </Form>
            <div className='d-flex justify-content-between'>
                <Link to='' className='d-block text-decoration-none'><small></small></Link>
                <small>Already have an account? Please <Link to='/login' className='text-decoration-none'>Login</Link></small>
            </div>

            <div className='mx-auto w-100 text-center mt-3'>
                <small>Or Sign Up Using</small>
                <div className='mt-2'>
                    <FaGooglePlus className='icons me-2'></FaGooglePlus>
                    <FaGithub className='icons'></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default Register;