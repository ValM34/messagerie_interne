import { combineReducers } from "redux";
import signin from "../reducers/signin";
import signup from "../reducers/signup";
import news from "../reducers/news";
import comments from "../reducers/comments";

export default combineReducers({ signin, signup, news, comments });