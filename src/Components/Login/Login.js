import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGooglePlus, FaGooglePlusG } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')

    const { signInUser, resetPassword, signInWithGoogle, signInWithGitHub, verifyEmail } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('Password should contains a Capital letter')
            return;
        }

        if (password < 6) {
            toast.error('Password should be at least 6 characters');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            toast.error('Please add at least one special character')
        }


        // sign in with email and password
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Loged in')
                handleEamilVerfication()

                if (user && user?.uid) {
                    navigate(from, { replace: true })
                }
                // else {
                //     toast.error('Your email is not verified. Please Verified Email')
                // }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleEmaiValue = (event) => {
        const email = event.target.value;
        setUserEmail(email)
    }

    // email verification
    const handleEamilVerfication = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => toast.error(error))
    }

    // reset eamil
    const handleResetPassword = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('please check your email and reset password')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // google sing in
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Login')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // git Sign in
    const handleGitSignIn = () => {
        signInWithGitHub(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Login')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className='w-50 mx-auto my-4 form-container'>
            <h4 className='text-center mb-4'>Hello!!! Login Your Account</h4>
            <Form onSubmit={handleSubmit} className='form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmaiValue} name='email' type="email" placeholder="user email" className='input-field' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="password" className='input-field' required />
                </Form.Group>


                <Button variant="primary" type="submit" className='w-100 my-2 py-3 '>
                    Login
                </Button>
            </Form>
            <div className='d-flex justify-content-between'>
                <Link to='' onClick={handleResetPassword} className='d-block text-decoration-none'>
                    <small>Forget Password?</small></Link>
                <Link to='/register' className='text-decoration-none'><small>Create Account</small></Link>
            </div>

            <div className='mx-auto w-100 text-center mt-3'>
                <small>Or Login Using</small>
                <div className='mt-2 fs-4 display-2'>
                    <FaGooglePlus onClick={handleGoogleSignIn} className='icons me-2'></FaGooglePlus>
                    <FaGithub onClick={handleGitSignIn} className='icons'></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default Login;