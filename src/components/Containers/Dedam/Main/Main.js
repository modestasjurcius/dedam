import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import ItemCard from './ItemCard/ItemCard';
import classes from './Main.module.css';
import { getProducts } from '../Data/Products/ProductsData';

const Main = props => {
    const [type, setType] = useState(null);
    const [order, setOrder] = useState(null);

    const handleOrderChange = order => {
        setOrder(order);
    };

    const handleTypeChange = type => {
      setType(type);  
    };

    const products = getProducts(type, order);
    return (
        <div>
            <Toolbar 
                handleOrderChange={handleOrderChange}
                handleTypeChange={handleTypeChange}
            />
            {products && products.length > 0 &&
                <div className={classes.cardsContainer}>
                    {products.map(v => {return (
                        <ItemCard 
                            key={v.id}
                            itemId={v.id}
                            title={v.title}
                            text={v.text}
                            img={v.img}
                            disabled={props.user === null}
                            setItemId={props.setItemId}
                            onChangePage={props.onChangePage}
                        />   
                    )})}
                </div>
            }
        </div>
    );
};

export default Main;