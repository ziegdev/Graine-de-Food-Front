import {
    SET_EMAIL_SIGNIN,
    SET_PASSWORD_SIGNIN,
    SET_USER_FROM_API,
    RESET_FIELD,
    LOGGED,
} from 'src/actions/user';

import {
  SET_NEW_PROMO_CODE,
  SET_NEW_PROMO_POURCENT,
  SET_NEW_PROMO_START_DATE,
  SET_NEW_PROMO_END_DATE,
  MODIFY_CODE_PROMO,
} from 'src/actions/admin';

const initialState = {
    //Signin
    emailSignin: '',
    passwordSignin: '',
    //Singup
    emailSignup: '',
    passwordSignup: '',
    passwordConfirmSignup: '', 
    //info user
    email: '',
    firstname: '',
    logged: false,
    // code promo detailed
    promoCode: '',
    promoPourcent: '',
    promoStartDate: '',
    promoEndDate: '',
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_EMAIL_SIGNIN:            
            return {
                ...state,
                emailSignin: action.email,
            }
        case SET_PASSWORD_SIGNIN:
            return {
                ...state,
                passwordSignin: action.password,
            }
        case SET_USER_FROM_API:
            return {
                ...state,
                email: action.email,
                firstname: action.firstname,
                id: action.id,
            }
        case RESET_FIELD:
            return {
                ...state,
                emailSignin: '',
                passwordSignin: '',
                emailSignup: '',
                passwordSignup: '',
                passwordConfirmSignup: '', 
            }
        case LOGGED:
            return {
                ...state,                
                logged: true, 
            }

        case MODIFY_CODE_PROMO:
            return {
              ...state,                
              promoCode: action.promoCode,
              promoPourcent: action.promoPourcent,
              promoStartDate: action.promoStartDate,
              promoEndDate: action.promoEndDate,
            }

        case SET_NEW_PROMO_CODE:
            return {
              ...state,                
              promoCode: action.promoCode,
            }

        case SET_NEW_PROMO_POURCENT:
            return {
              ...state,                
              promoPourcent: action.promoPourcent,
            }

        case SET_NEW_PROMO_START_DATE:
            return {
              ...state,                
              promoStartDate: action.promoStartDate,
            }

        case SET_NEW_PROMO_END_DATE:
            return {
              ...state,                
              promoEndDate: action.promoEndDate,
            }
        default:
            return state;
    }
};
