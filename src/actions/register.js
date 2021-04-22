export const SET_EMAIL_SIGNUP = 'SET_EMAIL_SIGNUP';

export const setEmailSignup = (email) => ({
  type: SET_EMAIL_SIGNUP,
  email,
});

export const SET_PASSWORD_SIGNUP = 'SET_PASSWORD_SIGNUP';

export const setPasswordSignup = (password) => ({
  type: SET_PASSWORD_SIGNUP,
  password,
});

export const SET_PASSWORD_CONFIRM_SIGNUP = 'SET_PASSWORD_CONFIRM_SIGNUP';

export const setPasswordConfirmSignup = (passwordConfirm) => ({
  type: SET_PASSWORD_CONFIRM_SIGNUP,
  passwordConfirm,
});

export const SET_LASTNAME_SIGNUP = 'SET_LASTNAME_SIGNUP';

export const setLastnameSignup = (last_name) => ({
  type: SET_LASTNAME_SIGNUP,
  last_name,
});

export const SET_FIRSTNAME_SIGNUP = 'SET_FIRSTNAME_SIGNUP';

export const setFirstnameSignup = (first_name) => ({
  type: SET_FIRSTNAME_SIGNUP,
  first_name,
});

export const SET_INVOICE_ADDRESS_SIGNUP = 'SET_INVOICE_ADDRESS_SIGNUP';

export const setInvoiceAddressSignup = (invoice_address) => ({
  type: SET_INVOICE_ADDRESS_SIGNUP,
  invoice_address,
});

export const SET_INVOICE_POSTCODE_SIGNUP = 'SET_INVOICE_POSTCODE_SIGNUP';

export const setInvoicePostCodeSignup = (invoice_postcode) => ({
  type: SET_INVOICE_POSTCODE_SIGNUP,
  invoice_postcode,
});

export const SET_INVOICE_CITY_SIGNUP = 'SET_INVOICE_CITY_SIGNUP';

export const setInvoiceCitySignup = (invoice_city) => ({
  type: SET_INVOICE_CITY_SIGNUP,
  invoice_city,
});

export const SET_DELIVERY_ADDRESS_SIGNUP = 'SET_DELIVERY_ADDRESS_SIGNUP';

export const setDeliveryAddressSignup = (delivery_address) => ({
  type: SET_DELIVERY_ADDRESS_SIGNUP,
  delivery_address,
});

export const SET_DELIVERY_POSTCODE_SIGNUP = 'SET_DELIVERY_POSTCODE_SIGNUP';

export const setDeliveryPostCodeSignup = (delivery_postcode) => ({
  type: SET_DELIVERY_POSTCODE_SIGNUP,
  delivery_postcode,
});

export const SET_DELIVERY_CITY_SIGNUP = 'SET_DELIVERY_CITY_SIGNUP';

export const setDeliveryCitySignup = (delivery_city) => ({
  type: SET_DELIVERY_CITY_SIGNUP,
  delivery_city,
});

export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const SET_NEW_USER_FROM_API = 'SET_NEW_USER_FROM_API';

export const setNewUserFromApi = (email, password, lastname, firstname, invoiceAddress, invoicePostCode, invoiceCity, deliveryAddress, deliveryPostCode, deliveryCity, id) => ({
  type: SET_NEW_USER_FROM_API,
  email,
  password,
  lastname,
  firstname,
  invoiceAddress,
  invoicePostCode,
  invoiceCity,
  deliveryAddress,  
  deliveryPostCode,
  deliveryCity,
  id,
});
