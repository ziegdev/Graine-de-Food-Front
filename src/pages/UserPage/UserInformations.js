import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react';
import UserModal from '/src/pages/UserPage/UserModal.js';

const UserInformations = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="userpage">
            <div className="userpage__informations">
                <form 
                    action="submit"
                    method="get"
                    className="userpage__informations--form"
                    onSubmit={handleOnSubmit}
                >
                        <h2 className="userpage__informations__title">
                            Mes informations personnelles
                        </h2>
                        <div className="userpage__informations__input">
                            <Input
                                name="nom"
                                className="userpage__informations__input__content"
                                placeholder='Nom'
                                value="Simpsons"
                            />
                            <Input
                                name="prenom"
                                className="userpage__informations__input__content"
                                placeholder='Prénom'
                                value="Omer"
                            />
                            <Input
                                name="email"
                                className="userpage__informations__input__content"
                                placeholder='email'
                                value="test@test.fr"
                            />
                        </div>
                        <div className="userpage__informations__checkbox">
                        <Checkbox
                                className="userpage__informations__checkbox__content"
                                label="Je souhaite une option végan pour mes box"
                            />
                        </div>
                        <div className="userpage__informations__address">
                            <h2 className="userpage__informations__address__title">
                                Adresse de livraison
                            </h2>
                            <div className="userpage__informations__address__delivery">
                                <Input
                                    name="adresse"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Adresse'
                                    value="5 rue de la République"
                                    />
                                <Input
                                    name="code_postal"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Code postal'
                                    value="75016"
                                    />
                                <Input
                                    name="ville"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Ville'
                                    value="Paris"
                                    />
                            </div>
                            <h2 className="userpage__informations__address__title">
                                Adresse de facturation
                            </h2>
                            <div className="userpage__informations__address__invoice">
                            <Input
                                    name="adresse"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Adresse'
                                    value="5 rue de la République"
                                    />
                                <Input
                                    name="code_postal"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Code postal'
                                    value="75016"
                                    />
                                <Input
                                    name="ville"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Ville'
                                    value="Paris"
                                    />
                            </div>
                        </div>
                    <UserModal />
                </form>
            </div>
        </div>
    );
};

export default UserInformations;
