import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from './task.js'

const persistConfig = {
    key: "root",
    version:1,
    storage,
  };

  const reducer = combineReducers({
    tasks:taskReducer,
  })

  const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer:persistedReducer
        

    
})

export default  store;