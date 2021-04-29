import { connect } from 'react-redux';
import PaymentForm from '/src/pages/CartPage/TestPayement/PaymentForm/PaymentForm.js';


const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    finalPrice: state.finalPrice,
    userId: state.id
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
