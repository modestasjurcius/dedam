import React from 'react';
import classes from './ItemReview.module.css';
import { getProductById } from '../../Data/Products/ProductsData';
import { ButtonGroup, Button } from 'react-bootstrap';

const ItemReview = props => {
    const product = getProductById(props.productId);

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
                    <div>Spalva :</div>

                    <div className='btn-group'>
                        <button className={classes.btnBlue} />
                        <button className={classes.btnLightBlue} />
                        <button className={classes.btnYellow} />
                        <button className={classes.btnOrange} />
                        <button className={classes.btnRed} />
                        <button className={classes.btnGray} />
                        <button className={classes.btnWhite} />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ItemReview;