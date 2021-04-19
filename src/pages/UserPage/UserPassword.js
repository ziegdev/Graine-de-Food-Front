import React from 'react';
import { Input } from 'semantic-ui-react';


const UserPassword = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="userpage">
            <div className="userpage__informations__password">
                <form 
                    action="submit"
                    method="get"
                    className="userpage__informations__password--form"
                    onSubmit={handleOnSubmit}
                >
                        <h2 className="userpage__informations__password__title">
                            Mot de passe
                        </h2>
                        <div className="userpage__informations__password__input">
                            <Input
                                name="ancien_mot_de_passe"
                                className="userpage__informations__password__input__content"
                                placeholder='Ancien mot de passe'
                                value=""
                                type="password"
                            />
                            <Input
                                name="nouveau_mot_de_passe"
                                className="userpage__informations__password__input__content"
                                placeholder='Nouveau mot de passe'
                                value=""
                                type="password"
                            />
                            <Input
                                name="confirmation_nouveau_mot_de_passe"
                                className="userpage__informations__password__input__content"
                                placeholder='Confirmation du nouveau mot de passe'
                                value=""
                                type="password"
                            />
                        </div>
                        <button className="userpage__informations__password__button">
                            Modifier Mot de passe
                        </button>
                </form>
            </div>
        </div>
    );
};

export default UserPassword;