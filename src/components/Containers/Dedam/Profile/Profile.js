import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './Profile.module.css';
import { changeUser, getUserById } from '../Data/UserData';
import { notify } from 'react-notify-bootstrap';

const genders = [
    { value: '0', label: 'Nenustatyta' },
    { value: '1', label: 'Vyras' },
    { value: '2', label: 'Moteris' }
]

const Profile = props => {
    const user = getUserById(props.user.id)

    const [error, setError] = useState(null);
    const [changes, setChanges] = useState({});
    const [changesMade, setChangesMade] = useState(false);

    const gender = genders.find(g => changes && changes.gender ? g.value === changes.gender : g.value === user.gender);

    const changeHandler = props => {
        setChanges({ ...changes, [props.key]: props.value })
        setChangesMade(true);
    };

    const changeGender = value => changeHandler({ key: 'gender', value })

    const handleSubmit = e => {
        e.preventDefault();

        if (!changes) {
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
            text: 'Duomenys pakeisti sėkmingai',
            variant: 'success'
        });

        if (props.onChangePage)
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
                        onChange={e => changeHandler({
                            key: 'username',
                            value: e.target.value
                        })}
                        value={changes.username || user.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Elektroninis paštas</Form.Label>
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
                    <Form.Label>Lytis</Form.Label>
                    <div className={classes.radioGroup}>
                        <Form.Check type='radio' value='0' name='genderGroup' label='Nenustatyta' checked={gender.value === '0'} onChange={e => changeGender(e.target.value)} />
                        <Form.Check type='radio' value='1' name='genderGroup' label='Vyras' checked={gender.value === '1'} onChange={e => changeGender(e.target.value)} />
                        <Form.Check type='radio' value='2' name='genderGroup' label='Moteris' checked={gender.value === '2'} onChange={e => changeGender(e.target.value)} />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Vardas</Form.Label>
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
                    <Form.Label>Pavardė</Form.Label>
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
                    <Form.Label>Gimimo data</Form.Label>
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
                    disabled={!changesMade}
                    title={!changesMade ? 'Nėra pakeistų duomenų' : undefined}
                >
                    Pakeisti duomenis
                </Button>
            </Form>
        </div>
    );
};

export default Profile;
