import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoaded, isEmpty } from "react-redux-firebase"
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector(state => state.firebase.auth)
    const loggedIn = isLoaded(auth) && !isEmpty(auth)

    return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute