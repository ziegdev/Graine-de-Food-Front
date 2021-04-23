import { connect } from 'react-redux';
import HeaderMenu from '/src/components/Header/HeaderMenu.js';


const mapStateToProps = (state) => ({
    logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
