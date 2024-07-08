import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from './task.js'
import {
 

  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

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
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
        

    
})

export default  store;