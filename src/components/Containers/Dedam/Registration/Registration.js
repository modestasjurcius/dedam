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
            setError('Vardo laukas negali būti tuščias');
            return;
        }
        if(!lastname) {
            setError('Pavardės laukas negali būti tuščias');
            return;
        }
        if(!birthday) {
            setError('Gimimo datos laukas negali būti tuščias');
            return;
        }
        if(!email) {
            setError('Elektroninio pašto laukas negali būti tuščias');
            return;
        }
        if(!username) {
            setError('Slapyvardžio laukas negali būti tuščias');
            return;
        }
        if(!password) {
            setError('Slaptažodžio laukas negali būti tuščias');
            return;
        }
        if(!passwordRepeat) {
            setError('Slaptažodžio pakartojimo laukas negali būti tuščias');
            return;
        }
        if(password !== passwordRepeat) {
            setError('Slaptažodžiai nesutampa');
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
                text: 'Registracija sėkminga, dabar galite prisijungti', 
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
                    <Form.Label>Vardas</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Vardas'
                        onChange={e => setFirstname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pavardė</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Pavardė'
                        onChange={e => setLastname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gimimo data</Form.Label>
                    <Form.Control
                        type='date'
                        onChange={e => setBirthday(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Elektroninis paštas</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='email@host.com'
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Lytis</Form.Label>
                    <div className={classes.radioGroup}>
                        <Form.Check type='radio' value='0' name='genderGroup' label='Nenustatyta' checked={gender === '0'} onChange={e => setGender(e.target.value)}/>
                        <Form.Check type='radio' value='1' name='genderGroup' label='Vyras' onChange={e => setGender(e.target.value)}/>
                        <Form.Check type='radio' value='2' name='genderGroup' label='Moteris' onChange={e => setGender(e.target.value)}/>
                    </div>
                </Form.Group>

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

                <Form.Group>
                    <Form.Label>Pakartokite slaptažodį</Form.Label>
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
                    Registruotis
                </Button>

            </Form>
        </div>
    );
};

export default Registration;