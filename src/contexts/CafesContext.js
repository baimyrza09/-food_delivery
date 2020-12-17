import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { JSON_API } from "../helpers/constants";
import {calcSubPrice, calcTotalPrice} from '../helpers/calcPrice'



export const cafesContext = React.createContext();

const INIT_STATE = {
  cafes: [],
  cafesDetails: [],
  ordersCountInCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).orders.length : 0,
  cartData: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CAFES":
      return { state, cafes: action.payload };
    case "GET_CAFES_DETAILS":
      return { state, cafesDetails: action.payload };
    case "ADD_AND_DELETE_IN_CART":
      return { ...state, ordersCountInCart: action.payload };
    case "GET_CART":
        return {...state, cartData: action.payload}
    default:
      return state;
  }
};

const CafesContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [inpVal, setInpVal] = useState('')

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.cafes?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function getCafes() {
    let { data } = await axios(`${JSON_API}/cafes?q=${inpVal}`);
    dispatch({
      type: "GET_CAFES",
      payload: data,
    });
  }

  async function getCafesDetails(id) {
    let { data } = await axios(`${JSON_API}/cafes/${id}`);
    dispatch({
      type: "GET_CAFES_DETAILS",
      payload: data,
    });
  }

  function addAndDeleteOrderInCart(order) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        orders: [],
        totalPrice: 0,
      };
    }
    let newOrder = {
        order: order,
        count: 1,
        subPrice: 0
    }
    newOrder.subPrice = calcSubPrice(newOrder)
    let newCart = cart.orders.filter(item => item.order.id === order.id)
    if(newCart.length > 0){
        cart.orders = cart.orders.filter(item => item.order.id !== order.id)
    }else{
        cart.orders.push(newOrder)
    }
    cart.totalPrice = calcTotalPrice(cart.orders)
    localStorage.setItem('cart', JSON.stringify(cart))

    dispatch({
        type: "ADD_AND_DELETE_IN_CART",
        payload: cart.orders.length
    })
  }

  function getCart() {
      let cart = JSON.parse(localStorage.getItem('cart'))
      dispatch({
          type: "GET_CART",
          payload: cart
      })
    }

  function changeCountOrders(count, id){
      let cart = JSON.parse(localStorage.getItem('cart'))
      cart.orders = cart.orders.map(item => {
          if(item.order.id === id){
              item.count = count
              item.subPrice = calcSubPrice(item)
          }
          return item
      })
      cart.totalPrice = calcTotalPrice(cart.orders)
      localStorage.setItem('cart', JSON.stringify(cart))
      getCart()
  }

  function makeOrder(){
    //   let cart = JSON.parse(localStroage.getItem('cart'))
  }

  function search(inp_val){
    setInpVal(inp_val)
    getCafes()
  }

  return (
    <cafesContext.Provider
      value={{
        cafes: state.cafes,
        cafesDetails: state.cafesDetails,
        cartData: state.cartData,
        totalPosts: state.cafes?.length,
        postsPerPage,
        currentPage,
        currentPosts,
        setCurrentPage,
        paginate,
        getCafes,
        getCafesDetails,
        addAndDeleteOrderInCart,
        changeCountOrders,
        makeOrder,
        search
      }}
    >
      {children}
    </cafesContext.Provider>
  );
};

export default CafesContext;
