import { connect } from "react-redux";
import { signup } from "../../redux/reducers/signup";
import Signup from "./Signup"

const mapStateToProps = (state, ownProps) => ({
    loading: state.signup.loading,
    created: state.signup.created,
    error: state.signup.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: (name, surname, email, password, phone, birthday) => dispatch(signup(name, surname, email, password, phone, birthday)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);