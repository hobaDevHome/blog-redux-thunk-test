// action creator
import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPost = () => async (dispatch) => {
  const respose = await jsonPlaceHolder.get("./posts");
  dispatch({
    type: "FETCH_POST",
    payload: respose.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const respose = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: respose.data,
  });
};
