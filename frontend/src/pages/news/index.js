import { connect } from "react-redux";
import News from "./News";
import {
    getPublications,
    addPublication,
    delPublication,
    myPublications,
    setPublication,
    likePublication,
} from "../../redux/reducers/news";

const mapStateToProps = (state, ownProps) => ({
    // Get publications
  loading_get_publications: state.news.loading_get_publications,
  publications: state.news.publications,
  error_get_publications: state.news.error_get_publications,

  // Add publication
  loading_add_publication: state.news.loading_add_publication,
  publication_added: state.news.publication_added,
  error_add_publication: state.news.error_add_publication,

  // Del publication
  loading_del_publication: state.news.loading_del_publication,
  publication_deleted: state.news.publication_deleted,
  error_del_publication: state.news.error_del_publication,

  // Get my publications
  loading_get_my_publications: state.news.loading_get_my_publications,
  get_my_publications: state.news.get_my_publications,
  error_my_publications: state.news.error_my_publications,

  // Set publication
  loading_set_publication: state.news.loading_set_publication,
  publication_updated: state.news.publication_updated,
  error_set_publication: state.news.error_set_publication,

  // Like publication
  loading_like_publication: state.news.loading_like_publication,
  publication_liked: state.news.publication_liked,
  error_publication_liked: state.news.error_publication_liked,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPublications: (token) => dispatch(getPublications(token)),
    addPublication: (token) => dispatch(addPublication(token)),
    delPublication: (token) => dispatch(delPublication(token)),
    myPublications: (token) => dispatch(myPublications(token)),
    setPublication: (token) => dispatch(setPublication(token)),
    likePublication: (token) => dispatch(likePublication(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
