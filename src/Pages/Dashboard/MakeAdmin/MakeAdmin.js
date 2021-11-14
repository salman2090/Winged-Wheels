import React, { useEffect, useState } from 'react';
import './MakeAdmin.css';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
            const user = {email};
            fetch('http://localhost:5000/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="my-3">Make Admin</h2>
            <Form className="form-bg mb-3" onSubmit={handleAdminSubmit}>
            <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;