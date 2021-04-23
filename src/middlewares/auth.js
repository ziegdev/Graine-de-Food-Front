import React from 'react';
import {Redirect} from 'react-router-dom'
import api from 'src/api'
import {
    SUBMIT_LOGIN,
    setUserFromApi,
    logged,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
 switch (action.type) {
     case SUBMIT_LOGIN: {
         const { emailSignin, passwordSignin } = store.getState();
        api.post('/login', {
           email: emailSignin,
           password: passwordSignin,
        }).catch((err)=> console.log('error: ', err)
        )
            .then(result => store.dispatch(setUserFromApi(result.data.user.email, result.data.user.first_name, result.data.user.id)))
            .finally(() => {
           store.dispatch(logged()),
           <Redirect to='/mon-compte' />
       })
 return next(action);
}
default:
return next(action);
 }
};
