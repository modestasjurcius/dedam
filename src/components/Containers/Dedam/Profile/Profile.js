import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './Profile.module.css';
import { changeUser } from '../Data/UserData';
import { notify } from 'react-notify-bootstrap';

const genders = [
    { value: '0', label: 'Unknown' },
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' }
]

const Profile = props => {
    const { user } = props;

    const [error, setError] = useState(null);
    const [changes, setChanges] = useState({ });

    const gender = genders.find(g => changes && changes.gender ? g.value === changes.gender : g.value === user.gender);

    const changeHandler = props => {
        setChanges({ ...changes, [props.key]: props.value })
    };

    const changeGender = value => changeHandler({ key: 'gender', value })

    const handleSubmit = e => {
        e.preventDefault();

        if (!changes){
            console.log(
            `
            I see no changes, wake up in the morning, and I ask myself
            Is life worth living, should I blast myself?
            I'm tired of bein' poor, and even worse I'm black
            My stomach hurts, so I'm lookin' for a purse to snatch
            `);
            setError('No changes');
            return;
        }

        changeUser(props.user, changes);

        notify({
            text: 'Data changed successfuly', 
            variant: 'success'
        });
    };

    return (
        <div className={classes.container}>
            <Form className={classes.loginForm} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        onChange={e => changeHandler({
                            key: 'username', 
                            value: e.target.value
                        })}
                        value={changes.username || user.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => changeHandler({
                            key: 'email', 
                            value: e.target.value
                        })}
                        value={changes.email || user.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <div className={classes.radioGroup}>
                        <Form.Check type='radio' value='0' name='genderGroup' label='Unset' checked={gender.value === '0'} onChange={e => changeGender(e.target.value)}/>
                        <Form.Check type='radio' value='1' name='genderGroup' label='Male' checked={gender.value === '1'} onChange={e => changeGender(e.target.value)}/>
                        <Form.Check type='radio' value='2' name='genderGroup' label='Female' checked={gender.value === '2'} onChange={e => changeGender(e.target.value)}/>
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => changeHandler({
                            key: 'firstname', 
                            value: e.target.value
                        })}
                        value={changes.firstname || user.firstname}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => changeHandler({
                            key: 'lastname', 
                            value: e.target.value
                        })}
                        value={changes.lastname || user.lastname}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                        type='date'
                        onChange={e => changeHandler({
                            key: 'birthday', 
                            value: e.target.value,
                        })}
                        value={changes.birthday || user.birthday}
                        className='birthdaytest'
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
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;
