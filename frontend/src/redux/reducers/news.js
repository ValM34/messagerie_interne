import axios from "axios";
import { getApiUrl } from "../../tools/Tools";

const initialState = {

  // Get publications
  loading_get_publications: false,
  publications: [],
  error_get_publications: null,

  // Add publication
  loading_add_publication: false,
  publication_added: false,
  error_add_publication: null,

  // Del publication
  loading_del_publication: false,
  publication_deleted: false,
  error_del_publication: null,

  // Get my publications
  loading_get_my_publications: false,
  get_my_publications: [],
  error_my_publications: null,

  // Set publication
  loading_set_publication: false,
  publication_updated: false,
  error_set_publication: null,

  // Like publication
  loading_like_publication: false,
  publication_liked: false,
  error_publication_liked: null,

};

// Get publication
const LOADING_GET_PUBLICATIONS = "NEWS/LOADING_GET_PUBLICATIONS";
const SUCCESS_GET_PUBLICATIONS = "NEWS/SUCCESS_GET_PUBLICATIONS";
const ERROR_GET_PUBLICATIONS = "NEWS/ERROR_GET_PUBLICATIONS";

// Add publication
const LOADING_ADD_PUBLICATION = "NEWS/LOADING_ADD_PUBLICATION";
const SUCCES_ADD_PUBLICATION = "NEWS/SUCCES_ADD_PUBLICATION";
const ERROR_ADD_PUBLICATION = "NEWS/ERROR_ADD_PUBLICATION";

// Del publication
const LOADING_DEL_PUBLICATION = "NEWS/LOADING_DEL_PUBLICATION";
const PUBLICATION_DELETED = "NEWS/PUBLICATION_DELETED";
const ERROR_DEL_PUBLICATION = "NEWS/ERROR_DEL_PUBLICATION";

// Get my publications
const LOADING_GET_MY_PUBLICATIONS = "NEWS/LOADING_GET_MY_PUBLICATIONS";
const SUCCES_GET_MY_PUBLICATIONS = "NEWS/SUCCES_GET_MY_PUBLICATIONS";
const ERROR_MY_PUBLICATIONS = "NEWS/ERROR_MY_PUBLICATIONS";

// Set publication
const LOADING_SET_PUBLICATION = "NEWS/LOADING_SET_PUBLICATION";
const publication_updated = "NEWS/publication_updated";
const ERROR_SET_PUBLICATION = "NEWS/ERROR_SET_PUBLICATION";

// Like publication
const LOADING_LIKE_PUBLICATION = "NEWS/LOADING_LIKE_PUBLICATION";
const PUBLICATION_LIKED = "NEWS/PUBLICATION_LIKED";
const ERROR_PUBLICATION_LIKED = "NEWS/ERROR_PUBLICATION_LIKED";

// Get publications
const loading_get_publications = () => ({
  type: LOADING_GET_PUBLICATIONS,
});

const success_get_publications = (publications) => ({
  type: SUCCESS_GET_PUBLICATIONS,
  publications,
});

const error_get_publications = (error) => ({
  type: ERROR_GET_PUBLICATIONS,
  error,
});

// Add publication
const loading_add_publication = () => ({
  type: LOADING_ADD_PUBLICATION,
});

const success_add_publication = () => ({
  type: SUCCES_ADD_PUBLICATION,
});

const error_add_publication = (error) => ({
  type: ERROR_ADD_PUBLICATION,
  error,
});

// Del publication
const loading_del_publication = () => ({
  type: LOADING_DEL_PUBLICATION,
});

const publication_deleted = () => ({
  type: PUBLICATION_DELETED,
});

const error_del_publication = (error) => ({
  type: ERROR_DEL_PUBLICATION,
  error,
});

// Get my publications
const loading_get_my_publications = () => ({
  type: LOADING_GET_MY_PUBLICATIONS,
});

const succes_get_my_publications = (myPublications) => ({
  type: SUCCES_GET_MY_PUBLICATIONS,
  myPublications,
});

const error_my_publications = (error) => ({
  type: ERROR_MY_PUBLICATIONS,
  error,
});

// Set publication
const loading_set_publication = () => ({
  type: LOADING_SET_PUBLICATION,
});

const publication_updated = (publication) => ({
  type: publication_updated,
});

const error_set_publication = (error) => ({
  type: ERROR_SET_PUBLICATION,
  error,
});

// Like publication
const loading_like_publication = () => ({
  type: LOADING_LIKE_PUBLICATION,
});

const publication_liked = (publicationLiked) => ({
  type: PUBLICATION_LIKED,
  publicationLiked,
});

const error_publication_liked = (error) => ({
  type: ERROR_PUBLICATION_LIKED,
  error,
})


/////
export function getPublications(token) {
  return async dispatch => {
    try {
      dispatch(loading_get_publications());

      const response = await axios.get(`${getApiUrl()}/publications/getpublications`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(success_get_publications(response.data.publications));
      } else {
        dispatch(error_get_publications(response.data.message));
      }

    } catch (error) {
      dispatch(error_get_publications());
    }
  }
}

export function addPublication(token) {
  return async dispatch => {
    try {
      dispatch(loading_add_publication());

      const response = await axios.get(`${getApiUrl()}/publications/addpublication`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(success_add_publication());
      } else {
        dispatch(error_get_publications(response.data.message));
      }
    } catch (error) {
      dispatch(error_add_publication());
    }
  }
}
export function delPublication(token) {
  return async dispatch => {
    try {
      dispatch(loading_del_publication());

      const response = await axios.get(`${getApiUrl()}/publications/delpublication`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(publication_deleted());
      } else {
        dispatch(error_del_publication(response.data.message));
      }
    } catch (error) {
      dispatch(error_del_publication());
    }
  }
}
export function myPublications(token) {
  return async dispatch => {
    try {
      dispatch(loading_get_my_publications());

      const response = await axios.get(`${getApiUrl()}/publications/mypublication`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(succes_get_my_publications(response.data.myPublications));
      } else {
        dispatch(error_my_publications(response.data.message));
      }
    } catch (error) {
      dispatch(error_my_publications());
    }
  }
}
export function setPublication(token) {
  return async dispatch => {
    try {
      dispatch(loading_set_publication());

      const response = await axios.get(`${getApiUrl()}/publications/setpublication`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(publication_updated(response.data.myPublications));
      } else {
        dispatch(error_set_publication(response.data.message));
      }
    } catch (error) {
      dispatch(error_set_publication());
    }
  }
}
export function likePublication(token) {
  return async dispatch => {
    try {
      dispatch(loading_like_publication());

      const response = await axios.get(`${getApiUrl()}/publications/likepublication`, {
        headers: {
          "Content-Type": "application/json",
          "token": token,
        }
      });

      if (response.data.success) {
        dispatch(publication_liked());
      } else {
        dispatch(error_publication_liked(response.data.message));
      }
    } catch (error) {
      dispatch(error_publication_liked());
    }
  }
}
/////

export default function newsReducer(state = initialState, action) {

  switch (action.type) {
    // Get publications
    case LOADING_GET_PUBLICATIONS:
      return {
        ...state,
        loading_get_publications: true,
        publications: [],
        error_get_publications: null,
      };
    case SUCCESS_GET_PUBLICATIONS:
      return {
        ...state,
        loading_get_publications: false,
        publications: action.publications,
        error_get_publications: null,
      }
    case ERROR_GET_PUBLICATIONS:
      return {
        ...state,
        loading_get_publications: false,
        publications: [],
        error_get_publications: action.error,
      }

    // Add publication
    case LOADING_ADD_PUBLICATION:
      return {
        ...state,
        loading_add_publication: true,
        publication_added: false,
        error_add_publication: null,
      }
    case SUCCES_ADD_PUBLICATION:
      return {
        ...state,
        loading_add_publication: false,
        publication_added: action.publication,
        error_add_publication: null,
      }
    case ERROR_ADD_PUBLICATION:
      return {
        ...state,
        loading_add_publication: false,
        publication_added: false,
        error_add_publication: action.error,
      }

    // Del publication
    case LOADING_DEL_PUBLICATION:
      return {
        ...state,
        loading_del_publication: true,
        publication_deleted: false,
        error_del_publication: null,
      }
    case PUBLICATION_DELETED:
      return {
        ...state,
        loading_del_publication: false,
        publication_deleted: true,
        error_del_publication: null,
      }
    case ERROR_DEL_PUBLICATION:
      return {
        ...state,
        loading_del_publication: false,
        publication_deleted: false,
        error_del_publication: action.error,
      }

    // Get my publications
    case LOADING_GET_MY_PUBLICATIONS:
      return {
        ...state,
        loading_get_my_publications: true,
        get_my_publications: [],
        error_my_publications: null,
      }
    case SUCCES_GET_MY_PUBLICATIONS:
      return {
        ...state,
        loading_get_my_publications: false,
        get_my_publications: action.myPublications,
        error_my_publications: null,
      }
    case ERROR_MY_PUBLICATIONS:
      return {
        ...state,
        loading_get_my_publications: false,
        get_my_publications: [],
        error_my_publications: action.error,
      }

    // Set publication
    case LOADING_SET_PUBLICATION:
      return {
        ...state,
        loading_set_publication: true,
        publication_updated: false,
        error_set_publication: null,
      }
    case publication_updated:
      return {
        ...state,
        loading_set_publication: false,
        publication_updated: action.publication,
        error_set_publication: null,
      }
    case ERROR_SET_PUBLICATION:
      return {
        ...state,
        loading_set_publication: false,
        publication_updated: false,
        error_set_publication: action.error,
      }

    // Like publication
    case LOADING_LIKE_PUBLICATION:
      return {
        ...state,
        loading_like_publication: true,
        publication_liked: false,
        error_publication_liked: null,
      }
    case PUBLICATION_LIKED:
      return {
        ...state,
        loading_like_publication: false,
        publication_liked: action.publicationLiked,
        error_publication_liked: null,
      }
    case ERROR_PUBLICATION_LIKED:
      return {
        ...state,
        loading_like_publication: false,
        publication_liked: false,
        error_publication_liked: action.error,
      }
    default:
      return state;
  }

}