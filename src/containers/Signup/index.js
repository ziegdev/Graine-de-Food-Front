import { connect } from 'react-redux';
import Signup from 'src/pages/LoginPage/Signup.js';
import {
    setEmailSignup,
    setPasswordSignup,
    setPasswordConfirmSignup,
    setLastnameSignup,
    setFirstnameSignup,
    setInvoiceAddressSignup,
    setInvoicePostCodeSignup,
    setInvoiceCitySignup,
    setDeliveryAddressSignup,
    setDeliveryPostCodeSignup,
    setDeliveryCitySignup,
    submitSignup,
} from 'src/actions/register';
import {
    resetField
} from 'src/actions/user'

const mapStateToProps = (state) => ({
    email: state.email,
    emailSignup: state.emailSignup,
    passwordSignup: state.passwordSignup,
    passwordConfirmSignup: state.passwordConfirmSignup,
    lastnameSignup: state.lastnameSignup,
    firstnameSignup: state.firstnameSignup,
    invoiceAddressSignup: state.invoiceAddressSignup,
    invoicePostCodeSignup: state.invoicePostCodeSignup,
    invoiceCitySignup: state.invoiceCitySignup,
    deliveryAddressSignup: state.deliveryAddressSignup,
    deliveryPostCodeSignup: state.deliveryPostCodeSignup,
    deliveryCitySignup: state.deliveryCitySignup
});

const mapDispatchToProps = (dispatch) => ({
    setEmailSignup: (email) => dispatch(setEmailSignup(email)),
    setPasswordSignup: (password) => dispatch(setPasswordSignup(password)),
    setPasswordConfirmSignup: (passwordConfirm) => dispatch(setPasswordConfirmSignup(passwordConfirm)),
    setLastnameSignup: (last_name) => dispatch(setLastnameSignup(last_name)),
    setFirstnameSignup: (first_name) => dispatch(setFirstnameSignup(first_name)),
    setInvoiceAddressSignup: (invoice_address) => dispatch(setInvoiceAddressSignup(invoice_address)),
    setInvoicePostCodeSignup: (invoice_postcode) => dispatch(setInvoicePostCodeSignup(invoice_postcode)),
    setInvoiceCitySignup: (invoice_city) => dispatch(setInvoiceCitySignup(invoice_city)),
    setDeliveryAddressSignup: (delivery_address) => dispatch(setDeliveryAddressSignup(delivery_address)),
    setDeliveryPostCodeSignup: (delivery_postcode) => dispatch(setDeliveryPostCodeSignup(delivery_postcode)),
    setDeliveryCitySignup: (delivery_city) => dispatch(setDeliveryCitySignup(delivery_city)),
    submitSignup: () => dispatch(submitSignup()),
    resetField: ()=> dispatch(resetField())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
