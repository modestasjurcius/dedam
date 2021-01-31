import React, { useState } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Main from './Main/Main';
import ItemReview from './Main/ItemReview/ItemReview';
import Cart from './Main/Cart/Cart';
import Profile from './Profile/Profile';

const Dedam = props => {
    const [itemIdToView, setItemIdToView] = useState(null);
    const [cartProducts, setCardProducts] = useState([]);

    const addToCart = product => {
        let products = cartProducts;
        products.push(product);
        setCardProducts(products);
    }

    const cleanCart = () => {
        setCardProducts([]);
    };



    const getPage = page => {
        switch (page) {
            case 'login':
                return (
                    <Login
                        onChangePage={props.onChangePage}
                        onChangeUser={props.onChangeUser}
                    />);
            case 'register':
                return (
                    <Registration onChangePage={props.onChangePage} />
                );
            case 'main':
                return (
                    <Main
                        user={props.user}
                        setItemId={id => setItemIdToView(id)}
                        onChangePage={props.onChangePage}
                    />
                );
            case 'item-review':
                return (
                    <ItemReview
                        productId={itemIdToView}
                        addToCart={addToCart}
                        onChangePage={props.onChangePage}
                    />
                );
            case 'cart':
                return (
                    <Cart
                        products={cartProducts}
                        onChangePage={props.onChangePage}
                        cleanCart={cleanCart}
                    />
                );
            case 'profile':
                return (
                    <Profile
                        user={props.user}
                    />
                );
            default:
                return (<div>No page</div>);
        }
    }

    return (
        <div>
            {getPage(props.page)}
        </div>
    );
};

export default Dedam;