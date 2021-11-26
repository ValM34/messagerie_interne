import axios from "axios";
import { getApiUrl } from "../../tools/Tools";

const initialState = {

  // Get comments
  loading_get_comments: false,
  comments: [],
  error_get_comments: null,

  // Add comment
  loading_add_comment: false,
  comment_added: false,
  error_add_comment: null,

  // Det comment
  loading_del_comment: false,
  comment_deleted: false,
  error_del_comment: null,

  // Set comment
  loading_set_my_comment: false,
  comment_updated: false,
  error_set_comment: null,

};

// Get comment
const LOADING_GET_COMMENTS = "NEWS/LOADING_GET_COMMENTS";
const SUCCESS_GET_COMMENTS = "NEWS/SUCCESS_GET_COMMENTS";
const ERROR_GET_COMMENTS = "NEWS/ERROR_GET_COMMENTS";

// Add comment
const LOADING_ADD_COMMENT = "NEWS/LOADING_ADD_COMMENT";
const SUCCES_ADD_COMMENT = "NEWS/SUCCES_ADD_COMMENT";
const ERROR_ADD_COMMENT = "NEWS/ERROR_ADD_COMMENT";

// Del comment
const LOADING_DEL_COMMENT = "NEWS/LOADING_DEL_COMMENT";
const COMMENT_DELETED = "NEWS/COMMENT_DELETED";
const ERROR_DEL_COMMENT = "NEWS/ERROR_DEL_COMMENT";

// Set comment
const LOADING_SET_COMMENT = "NEWS/LOADING_SET_COMMENT";
const COMMENT_UPDATED = "NEWS/COMMENT_UPDATED";
const ERROR_SET_COMMENT = "NEWS/ERROR_SET_COMMENT";

// Get comments
const loading_get_comments = () => ({
  type: LOADING_GET_COMMENTS,
});

const success_get_comments = (comments) => ({
  type: SUCCESS_GET_COMMENTS,
  comments,
});

const error_get_comments = (error) => ({
  type: ERROR_GET_COMMENTS,
  error,
});

// Add comment
const loading_add_comment = () => ({
  type: LOADING_ADD_COMMENT,
});

const success_add_comment = () => ({
  type: SUCCES_ADD_COMMENT,
});

const error_add_comment = (error) => ({
  type: ERROR_ADD_COMMENT,
  error,
});

// Del comment
const loading_del_comment = () => ({
  type: LOADING_DEL_COMMENT,
});

const comment_deleted = () => ({
  type: COMMENT_DELETED,
});

const error_del_comment = (error) => ({
  type: ERROR_DEL_COMMENT,
  error,
});

// Set comment
const loading_set_comment = () => ({
  type: LOADING_SET_COMMENT,
});

const comment_updated = (comment) => ({
  type: COMMENT_UPDATED,
});

const error_set_comment = (error) => ({
  type: ERROR_SET_COMMENT,
  error,
});


/////
export function getcomments(token) {
  return async dispatch => {
    try {
      dispatch(loading_get_comments());

      const response = await axios.get(`${getApiUrl()}/comments/getcomments`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(success_get_comments(response.data.comments));
      } else {
        dispatch(error_get_comments(response.data.message));
      }

    } catch (error) {
      dispatch(error_get_comments());
    }
  }
}

export function addcomment(token) {
  return async dispatch => {
    try {
      dispatch(loading_add_comment());

      const response = await axios.get(`${getApiUrl()}/comments/addcomment`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(success_add_comment());
      } else {
        dispatch(error_get_comments(response.data.message));
      }
    } catch (error) {
      dispatch(error_add_comment());
    }
  }
}
export function delcomment(token) {
  return async dispatch => {
    try {
      dispatch(loading_del_comment());

      const response = await axios.get(`${getApiUrl()}/comments/delcomment`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(comment_deleted());
      } else {
        dispatch(error_del_comment(response.data.message));
      }
    } catch (error) {
      dispatch(error_del_comment());
    }
  }
}
export function setcomment(token) {
  return async dispatch => {
    try {
      dispatch(loading_set_comment());

      const response = await axios.get(`${getApiUrl()}/comments/setcomment`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(comment_updated(response.data.mycomments));
      } else {
        dispatch(error_set_comment(response.data.message));
      }
    } catch (error) {
      dispatch(error_set_comment());
    }
  }
}

/////

export default function newsReducer(state = initialState, action) {

  switch (action.type) {
    // Get comments
    case LOADING_GET_COMMENTS:
      return {
        ...state,
        loading_get_comments: true,
        comments: [],
        error_get_comments: null,
      };
    case SUCCESS_GET_COMMENTS:
      return {
        ...state,
        loading_get_comments: false,
        comments: action.comments,
        error_get_comments: null,
      }
    case ERROR_GET_COMMENTS:
      return {
        ...state,
        loading_get_comments: false,
        comments: [],
        error_get_comments: action.error,
      }

    // Add comment
    case LOADING_ADD_COMMENT:
      return {
        ...state,
        loading_add_comment: true,
        comment_added: false,
        error_add_comment: null,
      }
    case SUCCES_ADD_COMMENT:
      return {
        ...state,
        loading_add_comment: false,
        comment_added: action.comment,
        error_add_comment: null,
      }
    case ERROR_ADD_COMMENT:
      return {
        ...state,
        loading_add_comment: false,
        comment_added: false,
        error_add_comment: action.error,
      }

    // Del comment
    case LOADING_DEL_COMMENT:
      return {
        ...state,
        loading_del_comment: true,
        comment_deleted: false,
        error_del_comment: null,
      }
    case COMMENT_DELETED:
      return {
        ...state,
        loading_del_comment: false,
        comment_deleted: true,
        error_del_comment: null,
      }
    case ERROR_DEL_comment:
      return {
        ...state,
        loading_del_comment: false,
        comment_deleted: false,
        error_del_comment: action.error,
      }

    // Set comment
    case LOADING_SET_COMMENT:
      return {
        ...state,
        loading_set_comment: true,
        comment_updated: false,
        error_set_comment: null,
      }
    case COMMENT_UPDATED:
      return {
        ...state,
        loading_set_comment: false,
        comment_updated: action.comment,
        error_set_comment: null,
      }
    case ERROR_SET_COMMENT:
      return {
        ...state,
        loading_set_comment: false,
        comment_updated: false,
        error_set_comment: action.error,
      }

    default:
      return state;
  }

}