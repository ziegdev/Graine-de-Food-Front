import { connect } from 'react-redux';
import CartResume from '/src/pages/CartPage/CartResume';


const mapStateToProps = (state) => ({
    selectedSubMonth: state.selectedSubMonth,
    selectedSubPrice: state.selectedSubPrice
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CartResume);
