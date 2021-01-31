import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid';
import classes from './Cart.module.css';
import { Button, Modal } from 'react-bootstrap';
import { notify } from 'react-notify-bootstrap';

const Cart = props => {
    const [showBuyModal, setShowBuyModal] = useState(false);

    const getFullPrice = () => {
        let price = 0;
        if (props.products) {
            props.products.forEach(p => {
                price += p.price;
            });
        }

        return price;
    };

    const handleContinueShop = e => {
        if (props.onChangePage)
            props.onChangePage('main');
    };

    const handleBuy = e => {
        setShowBuyModal(true);
    };

    const handleDialogClose = paid => {
        setShowBuyModal(false);

        if (paid) {
            notify({
                text: 'Sėkmingai apmokėta',
                variant: 'success'
            });

            if (props.cleanCart)
                props.cleanCart();
        }
        else
            notify({
                text: 'Mokėjimas atšauktas',
                variant: 'warning'
            });

        if (paid && props.onChangePage)
            props.onChangePage('main');
    };

    return (
        <>
            <div>
                <Container>
                    <Row className={classes.headRow}>
                        <Col xs={3}>Produktas</Col>
                        <Col>Spalva</Col>
                        <Col xs={4}>Gaminimo tipas</Col>
                        <Col>Kaina</Col>
                    </Row>
                    {props.products.map(p => {
                        return (
                            <Row className={classes.row}>
                                <Col xs={3}>{p.name}</Col>
                                <Col>{p.color}</Col>

                                {p.pairProduct &&
                                    <>
                                        <Col>Vyro dydis: {p.sizeMan.toUpperCase()}</Col>
                                        <Col>Moters dydis: {p.sizeWoman.toUpperCase()}</Col>
                                    </>
                                }

                                {!p.pairProduct &&
                                    <>
                                        <Col>{p.type === 'man' ? 'Vyrui' : 'Moteriai'}</Col>
                                        <Col>Dydis: {p.size.toUpperCase()}</Col>
                                    </>
                                }
                                <Col>{p.priceText}</Col>
                            </Row>
                        );
                    })}

                    <Row className={classes.row}>
                        <Col xs={10}>Viso</Col>
                        <Col>{getFullPrice()} €</Col>
                    </Row>
                </Container>

                <div className={classes.btnContainer}>
                    {props.products && props.products.length > 0 &&
                        <Button
                            className={classes.buyBtn}
                            onClick={handleBuy}
                        >
                            Apmokėti
                </Button>
                    }
                    <Button
                        className={classes.continueBtn}
                        variant='secondary'
                        onClick={handleContinueShop}
                    >
                        Tęsti apsipirkimą
            </Button>
                </div>
            </div>

            <Modal show={showBuyModal} onHide={() => handleDialogClose(false)}>
                <Modal.Header>
                    <Modal.Title>Apmokėjimo langas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Šioje vietoje bus vykdomas apmokėjimas naudojant trečiųjų šalių integracijas
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleDialogClose(false)} variant='secondary'>
                        Atšaukit
                    </Button>
                    <Button onClick={() => handleDialogClose(true)}>
                        Apmokėta
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;