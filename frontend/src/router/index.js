import { connect } from "react-redux";
import Router from "./Router";

const mapStateToProps = (state, ownProps) => ({
    isConnected: state.signin.token !== null, 
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
