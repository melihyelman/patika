import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from "react-redux-firebase"
import { useFormik } from 'formik';
import Loading from '../Loading';

const Login = () => {
    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        // validationSchema,
        onSubmit: async (values, bag) => {
            //
            setFbErrors([]);
            firebase.login({ email: values.email, password: values.password })
                .then()
                .catch(err => setFbErrors([{ message: err.message }]))

        }
    })
    const errorsMap = () =>
        fbErrors.map((error, index) => <p key={index}>{error.message}</p>)


    return (
        <div className="flex items-center  justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left rounded-lg bg-white shadow-md">
                <div className="bg-gradient-to-r from-indigo-600 to-yellow-700" style={{ "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}>
                    <h3 className='text-2xl font-bold text-center '>Chat.<span className='text-xs'>App</span></h3>
                </div>
                <h6 className="my-3 text-l font-bold text-center">Login to your account</h6>
                {fbErrors.length > 0 && <>
                    <div className="bg-red-100 border text-xs border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">{errorsMap()}</strong>
                    </div>
                </>
                }
                <form onSubmit={formik.handleSubmit} >
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className='pb-4 border-b-2'>
                            <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">{formik.isSubmitting ? <Loading /> : "Login"}</button>
                        </div>
                        <div>
                            <p className="pt-4 text-center text-gray-600 text-sm">Don't have an account?<Link className="text-blue-600" to={"/signup"}> Sign up</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login