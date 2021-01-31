import React from 'react';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import classes from './Toolbar.module.css';

const Toolbar = props => {
    const handleDropdownChange = e => {
        if (props.handleOrderChange)
            props.handleOrderChange(e);
    };

    const handleButtonPress = type => {
        if (props.handleTypeChange)
            props.handleTypeChange(type);
    };

    return (
        <ButtonGroup className={classes.btnGroup}>
            <Button variant="secondary" onClick={e => handleButtonPress(null)}>Visi</Button>
            <Button variant="secondary" onClick={e => handleButtonPress('tshirt')}>Marškinėliai</Button>
            <Button variant="secondary" onClick={e => handleButtonPress('hoodie')}>Džemperiai</Button>
            <Button variant="secondary" onClick={e => handleButtonPress('apron')}>Prijuostės</Button>
            <Button variant="secondary" onClick={e => handleButtonPress('hat')}>Kepurės</Button>

            <DropdownButton
                as={ButtonGroup}
                title='Rūšiuoti pagal...'
                variant='secondary'
                className={classes.dropdown}
                onSelect={handleDropdownChange}
            >
                <Dropdown.Item eventKey='asc'>Kaina (mažiausia)</Dropdown.Item>
                <Dropdown.Item eventKey='desc'>Kaina (didžiausia)</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    );
};

export default Toolbar;