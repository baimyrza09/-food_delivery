import React, { useReducer } from "react";
import { JSON_API } from "../helpers/constants";
import axios from "axios";

export const adminContext = React.createContext();

const INIT_STATE = {
  cafes: [],
  menuDetails: [],
  editCafe: []
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CAFES":
      return { ...state, cafes: action.payload };
    case "GET_MENU_DETAILS":
      return { ...state, menuDetails: action.payload };
    case "GET_EDIT_CAFE":
      return { ...state, editCafe: action.payload };
    default:
      return state;
  }
};

const AdminContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addNewCafe(newCafe) {
    await axios.post(`${JSON_API}/cafes`, newCafe);
    getCafes();
  }

  async function getCafes() {
    let { data } = await axios(`${JSON_API}/cafes`);
    dispatch({
      type: "GET_CAFES",
      payload: data,
    });
  }

  async function getMenuDetails(id) {
    let { data } = await axios(`${JSON_API}/cafes/${id}`);
    dispatch({
      type: "GET_MENU_DETAILS",
      payload: data,
    });
  }

  const deleteCafe = async (id) => {
    await axios.delete(`${JSON_API}/cafes/${id}`);
    getCafes();
  };

  async function getEditCafe(id) {
    let { data } = await axios(`${JSON_API}/cafes/${id}`);
    dispatch({
      type: "GET_EDIT_CAFE",
      payload: data,
    });
  }

  const saveCafe =  async (newCafe) => {
      await axios.patch(`${JSON_API}/cafes/${newCafe.id}` ,newCafe)
  }

  const dishDelete = async (newArr) =>{
    await axios.put(`http://localhost:8001/cafes/${newArr.id}` ,newArr)
    getEditCafe(newArr.id)   
  }

  async function dishEdit(newArr){
    await axios.put(`http://localhost:8001/cafes/${newArr.id}` ,newArr)
    getEditCafe(newArr.id)   
  }

  return (
    <adminContext.Provider
      value={{
        cafes: state.cafes,
        menuDetails: state.menuDetails,
        editCafe: state.editCafe,
        getCafes,
        getMenuDetails,
        deleteCafe,
        addNewCafe,
        getEditCafe,
        saveCafe,
        dishDelete,
        dishEdit
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export default AdminContext;
