import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";

// apidan filmleri alır ve store a aktarır
export const getPopular = () => (dispatch) => {
  //yüklenme durumunu reducera bildir

  dispatch({ type: ActionTypes.MOVIES_LOADING });

  //apidan popüler filmleri al
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    //başarısız olursa reducera bildir
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
