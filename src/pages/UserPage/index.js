import React from 'react';
import UserInformations from 'src/containers/UserInformations';
import UserPassword from 'src/pages/UserPage/UserPassword';
import SubscribeInformations from 'src/pages/UserPage/SubscribeInformations';
import DeleteUser from 'src/pages/UserPage/DeleteUser';
import DisconnectUser from 'src/pages/UserPage/DisconnectUser';

import './style.scss';

const UserPage = () => {
    return (
        <div className="userpage">
            <UserInformations />
            <UserPassword />
            <SubscribeInformations />
            <DeleteUser />
            <DisconnectUser />
        </div>
    );
};

export default UserPage;
