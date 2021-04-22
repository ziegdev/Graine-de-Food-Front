import {
    SET_EMAIL_SIGNIN,
    SET_PASSWORD_SIGNIN,
    SET_USER_FROM_API,
    RESET_FIELD,
    LOGGED,
} from 'src/actions/user';
import {
    SET_EMAIL_SIGNUP,
    SET_PASSWORD_SIGNUP,
    SET_LASTNAME_SIGNUP,
    SET_FIRSTNAME_SIGNUP,
    SET_INVOICE_ADDRESS_SIGNUP,
    SET_INVOICE_POSTCODE_SIGNUP,
    SET_INVOICE_CITY_SIGNUP,
    SET_DELIVERY_ADDRESS_SIGNUP,
    SET_DELIVERY_POSTCODE_SIGNUP,
    SET_DELIVERY_CITY_SIGNUP,
    SET_NEW_USER_FROM_API,
    SET_PASSWORD_CONFIRM_SIGNUP
} from 'src/actions/register';

const initialState = {
    //Signin
    emailSignin: '',
    passwordSignin: '',
    //Singup
    emailSignup: '',
    passwordSignup: '',
    passwordConfirmSignup: '', 
    lastnameSignup: '',
    firstnameSignup: '',
    invoiceAddressSignup: '',
    invoicePostCodeSignup: '',
    invoiceCitySignup: '',
    deliveryAddressSignup: '',
    deliveryPostCodeSignup: '',
    deliveryCitySignup: '',
    //info user
    email: '',
    firstname: '',
    logged: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        // SIGNIN
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
        // SIGNUP
        case SET_EMAIL_SIGNUP:
            return {
                ...state,
                emailSignup: action.email,
            }
        case SET_PASSWORD_SIGNUP:
            return {
                ...state,
                passwordSignup: action.password,
            }
        case SET_PASSWORD_CONFIRM_SIGNUP:
            return {
                ...state,
                passwordConfirmSignup: action.passwordConfirm,
            }
        case SET_LASTNAME_SIGNUP:
            return {
                ...state,
                lastnameSignup: action.lastname,
            }
        case SET_FIRSTNAME_SIGNUP:
            return {
                ...state,
                firstnameSignup: action.firstname,
            }
        case SET_INVOICE_ADDRESS_SIGNUP:
            return {
                ...state,
                invoiceAddressSignup: action.invoiceAddress,
            }
        case SET_INVOICE_POSTCODE_SIGNUP:
        return {
            ...state,
            invoicePostCodeSignup: action.invoicePostCode,
        }
        case SET_INVOICE_CITY_SIGNUP:
        return {
            ...state,
            invoiceCitySignup: action.invoiceCity,
        }
        case SET_DELIVERY_ADDRESS_SIGNUP:
            return {
                ...state,
                deliveryAddressSignup: action.deliveryAddress,
            }
        case SET_DELIVERY_POSTCODE_SIGNUP:
            return {
                ...state,
                deliveryPostCodeSignup: action.deliveryPostCode,
            }
        case SET_DELIVERY_CITY_SIGNUP:
            return {
                ...state,
                deliveryCitySignup: action.deliveryCity,
            }
        case SET_NEW_USER_FROM_API:
            return {
                ...state,
                emailSignup: action.email,
                passwordSignup: action.password, 
                lastnameSignup: action.lastname,
                firstnameSignup: action.firsname,
                invoiceAddressSignup: action.invoiceAddress,
                invoicePostCodeSignup: action.invoicePostCode,
                invoiceCitySignup: action.invoiceCity,
                deliveryAddressSignup: action.deliveryAddress,
                deliveryPostCodeSignup: action.deliveryPostCode,
                deliveryCitySignup: action.deliveryCity,
                id: action.id,
            }

        // RESET FIELD
        case RESET_FIELD:
            return {
                ...state,
                emailSignin: '',
                passwordSignin: '',
                emailSignup: '',
                passwordSignup: '',
                passwordConfirmSignup: '', 
            }
            // CONNECTION
        case LOGGED:
            return {
                ...state,                
                logged: true, 
            }
        default:
            return state;
    }
};
