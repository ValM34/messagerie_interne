import { connect } from "react-redux";
import { signin } from "../../redux/reducers/signin";
import Signin from "./Signin";

const mapStateToProps = (state, ownProps) => ({
  loading: state.signin.loading,
  isConnected: state.signin.token !== null,
  error: state.signin.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signin: (email, password) => dispatch(signin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
