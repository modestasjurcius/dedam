import React, { useState } from 'react';
import classes from './ItemReview.module.css';
import { getProductById } from '../../Data/Products/ProductsData';
import { Form, Button } from 'react-bootstrap';
import { notify } from 'react-notify-bootstrap';

const ItemReview = props => {
    const [color, setColor] = useState('Mėlyna');
    const [size, setSize] = useState('xs');
    const [sizeMan, setSizeMan] = useState('xs');
    const [sizeWoman, setSizeWoman] = useState('xs');
    const [type, setType] = useState('man');

    const product = getProductById(props.productId);

    const handleAddToCart = () => {
        let cartProduct = {
            color: color,
            price: product.price,
            pairProduct: product.pairProduct ? true : false,
            name: product.title,
            priceText: product.text,
        };

        if (product.pairProduct) {
            cartProduct = {
                ...cartProduct,
                sizeMan: sizeMan,
                sizeWoman: sizeWoman
            };
        } else {
            cartProduct = {
                ...cartProduct,
                size: size,
                type: type
            }
        }

        if (props.addToCart)
            props.addToCart(cartProduct);

        if (props.onChangePage)
            props.onChangePage('main');

        notify({
            text: 'Produktas sėkmingai pridėtas į krepšelį',
            variant: 'success'
        });
    };


    return (
        <div className={classes.container}>
            <h2>{product.title}</h2>
            <div className={classes.columnsContainer}>
                <img
                    src={product.img}
                    className={classes.img}
                />
                <div className={classes.column}>
                    <div>Kaina: {product.text}</div>

                    <Form className={classes.colorForm}>
                        <div className={classes.sizeRow}>
                            <div className='pr-3'>Spalva</div>
                            <Form.Control as='select' onChange={e => setColor(e.target.value)}>
                                <option className={classes.btnBlue} value='Mėlyna'>Mėlyna</option>
                                <option className={classes.btnLightBlue} value='Šviesiai mėlyna'>Šviesiai mėlyna</option>
                                <option className={classes.btnYellow} value='Geltona'>Geltona</option>
                                <option className={classes.btnOrange} value='Oranžinė'>Oranžinė</option>
                                <option className={classes.btnRed} value='Raudona'>Raudona</option>
                                <option className={classes.btnGray} value='Pilka'>Pilka</option>
                                <option className={classes.btnWhite} value='Balta'>Balta</option>
                            </Form.Control>
                        </div>


                        {product.pairProduct &&
                            <>
                                <div>Gaminimo dydis: </div>
                                <div className={classes.sizeRow}>
                                    <i class="fa fa-male pr-3"></i>
                                    <Form.Control as='select' onChange={e => setSizeMan(e.target.value)}>
                                        <option value='xs'>XS</option>
                                        <option value='s'>S</option>
                                        <option value='m'>M</option>
                                        <option value='l'>L</option>
                                        <option value='xl'>XL</option>
                                        <option value='xxl'>XXL</option>
                                    </Form.Control>
                                </div>

                                <div className={classes.sizeRow}>
                                    <i class="fa fa-female pr-3"></i>
                                    <Form.Control as='select' onChnage={e => setSizeWoman(e.target.value)}>
                                        <option value='xs'>XS</option>
                                        <option value='s'>S</option>
                                        <option value='m'>M</option>
                                        <option value='l'>L</option>
                                        <option value='xl'>XL</option>
                                        <option value='xxl'>XXL</option>
                                    </Form.Control>
                                </div>
                            </>
                        }
                        {!product.pairProduct &&
                            <>
                                <div>Pasirinkite gaminimo tipą :</div>
                                <Form.Control as='select' onChange={e => setType(e.target.value)}>
                                    <option value='man'>Vyrams</option>
                                    <option value='woman'>Moterims</option>
                                </Form.Control>
                                <div>Gaminimo dydis: </div>
                                <Form.Control as='select' onChange={e => setSize(e.target.value)}>
                                    <option value='xs'>XS</option>
                                    <option value='s'>S</option>
                                    <option value='m'>M</option>
                                    <option value='l'>L</option>
                                    <option value='xl'>XL</option>
                                    <option value='xxl'>XXL</option>
                                </Form.Control>
                            </>
                        }

                        <Button
                            className={classes.addBtn}
                            variant='primary'
                            onClick={() => handleAddToCart()}
                        >
                            Pridėti į krepšelį
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ItemReview;