import axios from "axios";
import { getApiUrl } from "../../tools/Tools";

const initialState = {
  loading: false,
  token: null,
  error: null,
};

const SIGNIN_LOADING = "SIGNIN/SIGNIN_LOADING";
const SIGNIN_SUCCESS = "SIGNIN/SIGNIN_SUCCESS";
const SIGNIN_ERROR = "SIGNIN/SIGNIN_ERROR";

const signin_loading = () => ({
  type: SIGNIN_LOADING,
});

const signin_success = (token) => ({
  type: SIGNIN_SUCCESS,
  token,
});

const signin_error = (error) => ({
  type: SIGNIN_ERROR,
  error,
});

export function signin(email, password) {
  return async (dispatch) => {
    // Envoyer une requette au serveur pour demander de se connecter
    try {
      dispatch(signin_loading());
      const response = await axios.post(
        "http://localhost:3001/users/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        // J'ai réussi à obtenir un JWT ==> Je suis connecté
        dispatch(signin_success(response.data.token));
      } else {
        // Je ne suis pas connecté
        dispatch(signin_error(response.data.message));
      }
    } catch (error) {
      // Ooops, une erreur s'est produite
    }
  };
}

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        error: null,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.error,
      };
    default:
      return state;
  }
}
