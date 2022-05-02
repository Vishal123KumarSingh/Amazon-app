import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer.
export const StateContext = createContext();

// Wrap our App and Provide the data layer to the App
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer.
export const useStateValue = () => useContext(StateContext);

// We are creating StateProvider ,So that every Component can get access to the data layer.
