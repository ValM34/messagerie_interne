import axios from "axios";
import { getApiUrl } from "../../tools/Tools";

const initialState = {
  loading: false,
  created: false,
  error: null,
};

const SIGNUP_LOADING = "SIGNUP/SIGNUP_LOADING";
const SIGNUP_SUCCESS = "SIGNUP/SIGNUP_SUCCESS";
const SIGNUP_ERROR = "SIGNUP/SIGNUP_ERROR";

const signup_loading = () => ({
  type: SIGNUP_LOADING,
});

const signup_success = () => ({
  type: SIGNUP_SUCCESS,
});

const signup_error = (error) => ({
  type: SIGNUP_ERROR,
  error,
});

export function signup(name, surname, email, password, phone, birthday) {
  return async (dispatch) => {
    // Envoyer une requette au serveur pour demander de se connecter
    try {
      dispatch(signup_loading());

      const response = await axios.post(
        "http://localhost:3001/users/signup",
        {
          name,
          surname,
          email,
          password,
          phone,
          birthday,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log(response);
      if (response.data.success) {

        dispatch(signup_success());
      } else {
        // Je ne suis pas connecté
        dispatch(signup_error(response.data.message));
      }
    } catch (error) {
      // Ooops, une erreur s'est produite
      dispatch(signup_error("UNKNOWN_ERROR"));
    }
  };
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
        created: false,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        created: true,
        error: null,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        created: false,
        error: action.error,
      };
    default:
      return state;
  }
}
