import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import firebase from "./firebase";
import store from "./store/store"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from './App';
import SignUp from "./components/auth/SignUp"
import Login from "./components/auth/Login"
import PrivateRoute from "./components/auth/PrivateRoute"

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}
console.log(rrfProps)


const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate("/")
      } else {
        navigate("/login")
      }
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<App />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}


ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider >,
  document.getElementById('root')
);
