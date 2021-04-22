import { connect } from 'react-redux';
import PromoForm from 'src/pages/AdminPromoPage/PromoForm.js';

const mapStateToProps = (state) => ({
    promoCode: state.promoCode,
    promoPourcent: state.promoPourcent,
    promoStartDate: state.promoStartDate,
    promoEndDate: state.promoEndDate,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PromoForm);
