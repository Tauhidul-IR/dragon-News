import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hook/useTitle';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoading } = useContext(AuthContext)

    // useTitle("Login")

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(result);
                form.reset();
                setError('')
                // navigate(from, { replace: true })


                //for verified login-->
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error("please verify email first")
                }

                //-------<-
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }
    return (

        <Form onSubmit={handleSubmit}>
            <h1>Please Login.</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;