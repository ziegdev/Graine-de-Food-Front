import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react'

const Signup = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('je soumets le formulaire');
    }
    return (
        <div className="loginpage__signup">
        <form
                action="submit"
                method="post"
                className="loginpage__signup--form"
                onSubmit={handleOnSubmit}
            >
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">S'inscrire</h2>
                    <div className="loginpage__signup__input">
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Email' 
                        />
                        <Input 
                            className="loginpage__signup__input__content"
                            placeholder='Mot de Passe' 
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Confirmation de Mot de passe'
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Nom'
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Prénom'
                        />
                    </div>
            </div>
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">Adresse de facturation</h2>
                    <div className="loginpage__signup__input">
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Adresse'
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Code Postal'
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Ville'
                        />
                    </div>
            </div>
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">Adresse de livraison</h2>
                <div className="loginpage__signup__input">
                    <Input
                    className="loginpage__signup__input__content"
                    placeholder='Adresse'
                    />
                    <Input
                        className="loginpage__signup__input__content"
                        placeholder='Code Postal'
                    />
                    <Input
                        className="loginpage__signup__input__content"
                        placeholder='Ville'
                    />
                </div>
            </div>
            <div className="loginpage__options">
                <div className="loginpage__options__checkbox">
                    <Checkbox
                        className="loginpage__options__checkbox__content"
                        label='Vegan'
                    />
                    <Checkbox
                        className="loginpage__options__checkbox__content"
                        label="Je souhaite m'abonner à la newsletter"
                    />
                </div>
            </div>
            <div className="loginpage__validate">
                <button
                    type="submit"
                    className="loginpage__signup__button"
                >
                        Créer mon compte
                </button>
            </div>
        </form>
    </div>
    )
};

export default Signup;