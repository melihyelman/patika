import { useFormik } from 'formik';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from "react-redux-firebase"
import Loading from '../Loading';

const SignUp = () => {
    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([])

    // console.log(firebase)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ""
        },
        // validationSchema,
        onSubmit: async (values, bag) => {
            //
            setFbErrors([]);
            const firstName = values.username.split(' ').slice(0, -1).join(' ')
            const lastName = values.username.split(' ').slice(-1).join(' ')
            firebase.createUser(
                { email: values.email, password: values.password },
                { name: values.username, avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&color=#fff` })
                .then()
                .catch(err => setFbErrors([{ message: err.message }]))
        }
    })
    const errorsMap = () =>
        fbErrors.map((error, index) => <p key={index}>{error.message}</p>)

    return (
        <div className="flex items-center  justify-center min-h-screen bg-gray-200">

            <div className="px-8 py-6 mt-4 text-left rounded-lg bg-white shadow-lg">
                <div className="bg-gradient-to-r from-indigo-600 to-yellow-700" style={{ "WebkitBackgroundClip": "text", "WebkitTextFillColor": "transparent" }}>
                    <h3 className='text-2xl font-bold text-center '>Chat.<span className='text-xs'>App</span></h3>
                </div>
                <h6 className="my-3 text-l font-bold text-center">Create a own account</h6>
                {fbErrors.length > 0 && <>
                    <div className="bg-red-100 border text-xs border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">{errorsMap()}</strong>
                    </div>
                </>
                }
                <form onSubmit={formik.handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Username</label>
                            <input type="text" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} placeholder="Username"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
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
                            <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">{formik.isSubmitting ? <Loading /> : "Sign Up"}</button>
                        </div>
                        <div>
                            <p className="pt-4 text-center text-gray-600 text-sm">You have already a account?<Link className="text-blue-700" to={"/login"}> Login</Link> </p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp