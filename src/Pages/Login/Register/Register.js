import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, SetLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
            if(loginData.password !== loginData.password2){
                alert("Your Password didn't match.")
                return
            }
            registerUser(loginData.email, loginData.password, loginData.name, history)
           e.preventDefault();
    }
    return (
        <div>
            <h2 className="my-5">Please Register!</h2>
            { !isLoading &&<Form className="form-bg mb-5" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                    <h6 className="text-start">Enter Your Name</h6>
                    <Form.Control type="text" name="name" onBlur = {handleOnBlur} placeholder="Name" />
                </Form.Group>
                
                <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                    <h6 className="text-start">Enter Your Email</h6>
                    <Form.Control type="email" name="email" onBlur = {handleOnBlur} placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
                    <h6 className="text-start">Enter Your Password</h6>
                    <Form.Control type="password" name="password" onBlur = {handleOnBlur} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-5 w-50 m-auto" controlId="formBasicPassword">
                    <h6 className="text-start">Re-enter Your Password</h6>
                    <Form.Control type="password" name="password2" onBlur = {handleOnBlur} placeholder="Re-enter Password" />
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button><br />
                <NavLink to="/login" >
                <button type="button" className="text-decoration-none btn btn-link">Already Registered? Please Login</button>
                </NavLink>
            </Form>}
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert variant="success">User Created Successfully!</Alert>}
            {authError && <Alert variant="danger">{authError}</Alert> }
        </div>
    );
};

export default Register;