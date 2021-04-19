import React from 'react';

const DeleteUser = () => {
    return (
        <div className="userpage">
            <div className="userpage__informations__deleteCount">
                <h2>Supprimer mon compte</h2>
                <button className="userpage__informations__deleteCount__button">
                    Oubliez-moi !
                </button>
            </div>
        </div>
    );
};

export default DeleteUser;