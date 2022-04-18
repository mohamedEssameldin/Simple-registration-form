import axios from "axios";
import * as actionTypes from "./actionTypes";

const getAllData = (data) => ({ type: actionTypes.FETCH_ALL_DATA, data });

const createCandiate = (candiate) => ({
  type: actionTypes.CREATE_CANDIATE,
  candiate,
});

const deleteCandiate = (id) => ({ type: actionTypes.DELETE_CANDIATE, id });

const updateCandiate = (candiate) => ({
  type: actionTypes.EDIT_CANDIATE,
  candiate,
});

export const fetchInitialDta = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:47651/api/DCandiates")
      .then((res) => dispatch(getAllData(res.data)))
      .catch((errors) => console.log(errors.message));
  };
};

export const addCandiate = (candiate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:47651/api/DCandiates", candiate)
      .then((res) => dispatch(createCandiate(res.data)))
      .catch((error) =>
        console.log("Errors Messages", error.response.data.errors)
      );
  };
};

export const removeCandiate = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:47651/api/DCandiates/${id}`)
      .then((res) => dispatch(deleteCandiate(id)))
      .catch((error) => console.log(error));
  };
};

export const editCandiate = (id, candiate) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:47651/api/DCandiates/${id}`, candiate)
      .then((res) => dispatch(updateCandiate(candiate)))
      .catch((error) => console.log(error.response.data));
  };
};
