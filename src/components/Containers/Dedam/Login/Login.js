import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './Login.module.css';
import { findUser } from '../Data/UserData';

const Login = props => {
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!username) {
            setError('Slapyvardžio laukas negali būti tuščias');
            return;
        } else if (!password) {
            setError('Slaptažodžio laukas negali būti tuščias');
            return;
        }

        const user = findUser(username, password);
        if (!user) {
            setError('Vartotojas nerastas');
            return;
        }

        if(props.onChangeUser)
            props.onChangeUser(user);
        if(props.onChangePage)
            props.onChangePage('main');
    };

    return (
        <div className={classes.container}>
            <Form className={classes.loginForm} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Slapyvardis</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Slapyvardis'
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Slaptažodis</Form.Label>
                    <Form.Control
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                {error &&
                    <Form.Text className={classes.error}>{error}</Form.Text>
                }
                <Button
                    variant='primary'
                    className={classes.loginBtn}
                    type='submit'
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
