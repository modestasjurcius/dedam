import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './ItemCard.module.css';

const ItemCard = props => {
    const handleProductSelect = e => {
        if(props.setItemId)
            props.setItemId(props.itemId);

        if(props.onChangePage)
            props.onChangePage('item-review')
    };

    return (
        <Card className={classes.card}>
            <Card.Img variant='top' src={props.img} className={classes.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button
                    disabled={props.disabled}
                    title={props.disabled ? 'Reikia prisijungti, norint peržiūrėti prekę' : undefined}
                    variant='secondary'
                    onClick={handleProductSelect}
                >
                    Peržiūrėti
                    </Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCard;