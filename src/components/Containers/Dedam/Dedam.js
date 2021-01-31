import React, { useState } from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Main from './Main/Main';
import ItemReview from './Main/ItemReview/ItemReview';

const Dedam = props => {
    const [itemIdToView, setItemIdToView] = useState(null);

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