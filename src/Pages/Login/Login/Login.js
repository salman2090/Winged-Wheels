import React, { useState } from 'react';
import './Login.css';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, SetLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="my-5">Please Login!</h2>
            { !isLoading && <Form className="form-bg mb-5" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                    <h6 className="text-start">Enter Your Email</h6>
                    <Form.Control type="email" name="email" onBlur = {handleOnBlur} placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-5 w-50 m-auto" controlId="formBasicPassword">
                    <h6 className="text-start">Enter Your Password</h6>
                    <Form.Control type="password" name="password" onBlur = {handleOnBlur} placeholder="Password" />
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button><br />
                <NavLink to="/register" >
                <button type="button"  className="text-decoration-none btn btn-link">New User? Please Register</button>             
                </NavLink>
            </Form>}
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert variant="success">User Created Successfully!</Alert>}
            {authError && <Alert variant="danger">{authError}</Alert> }
        </div>
    );
};

export default Login;