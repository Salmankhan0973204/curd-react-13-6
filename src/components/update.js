import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstNameValue, setFirstName] = useState('');
    const [lastNameValue, setLastName] = useState('');
    const [emailValue, setEmail] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8000/posts/${id}`, {
            firstNameValue,
            lastNameValue,
            emailValue
        }).then(() => {
            console.log(firstNameValue , lastNameValue , emailValue)
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstNameValue} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastNameValue} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='email' value={emailValue} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
               
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
