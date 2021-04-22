import {
    SET_EMAIL_SIGNIN,
    SET_PASSWORD_SIGNIN,
    SET_USER_FROM_API,
    RESET_FIELD,
    LOGGED,
} from 'src/actions/user';

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
        default:
            return state;
    }
};
