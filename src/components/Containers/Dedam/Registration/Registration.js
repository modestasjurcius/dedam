import React, { useState } from 'react';
import classes from './Registration.module.css';
import { Form, Button } from 'react-bootstrap';
import { addUser } from '../Data/UserData';
import { notify } from 'react-notify-bootstrap';

const Registration = props => {
    const [error, setError] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState('0');
    const [birthday, setBirthday] = useState(null);

    const handleRegistration = e => {
        e.preventDefault();

        if(!firstname) {
            setError('Firstname cannot be empty');
            return;
        }
        if(!lastname) {
            setError('Lastname cannot be empty');
            return;
        }
        if(!birthday) {
            setError('Birthday cannot be empty');
            return;
        }
        if(!email) {
            setError('Email cannot be empty');
            return;
        }
        if(!username) {
            setError('Username cannot be empty');
            return;
        }
        if(!password) {
            setError('Password cannot be empty');
            return;
        }
        if(!passwordRepeat) {
            setError('Password repeat cannot be empty');
            return;
        }
        if(password !== passwordRepeat) {
            setError('Password and password repeat do not match');
            return;
        }

        const data = {
            username: username,
            password: password,
            email: email,
            gender: gender,
            firstname: firstname,
            lastname: lastname,
            birthday: birthday
        };

        const registrationError = addUser(data);
        if(registrationError) {
            setError(registrationError);
            return;
        } else {
            if(props.onChangePage)
                props.onChangePage('login');


            notify({
                text: 'Registration successful, now you can log in', 
                variant: 'success'
            });
        }
    };

    return (
        <div className={classes.container}>
            <Form
                className={classes.registerForm}
                onSubmit={handleRegistration}
            >
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='First name'
                        onChange={e => setFirstname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Last name'
                        onChange={e => setLastname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                        type='date'
                        onChange={e => setBirthday(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='email@host.com'
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <div className={classes.radioGroup}>
                        <Form.Check type='radio' value='0' name='genderGroup' label='Unset' checked={gender === '0'} onChange={e => setGender(e.target.value)}/>
                        <Form.Check type='radio' value='1' name='genderGroup' label='Male' onChange={e => setGender(e.target.value)}/>
                        <Form.Check type='radio' value='2' name='genderGroup' label='Female' onChange={e => setGender(e.target.value)}/>
                    </div>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control
                        type='password'
                        onChange={e => setPasswordRepeat(e.target.value)}
                    />
                </Form.Group>

                {error &&
                    <Form.Text className={classes.error}>{error}</Form.Text>
                }

                <Button
                    variant='primary'
                    className={classes.registerBtn}
                    type='submit'
                >
                    Register
                </Button>

            </Form>
        </div>
    );
};

export default Registration;