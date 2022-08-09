import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { updateAsync } from '../redux/userSlice'

export const EditProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useLocalStorage("user", {})

    const formik = useFormik({
        initialValues: {
            email: user.email,
            password: user?.password,
            avatar: user.avatar,
            name: user.name,
        },
        onSubmit: async (values, bag) => {
            await dispatch(updateAsync({ ...values, id: user.id }))
            setUser({ ...values, id: user.id })
        }
    })

    return (
        <div className="w-full flex items-start justify-center min-h-screen px-4">
            <div className="w-full px-8 py-6 mt-4 text-left rounded-lg bg-white shadow-md border">
                <h6 className="my-3 text-l font-bold text-center">Update to your account</h6>
                <form onSubmit={formik.handleSubmit} >
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor='password'>Password</label>
                            <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className='mt-4'>
                            <label className="block" htmlFor="avatar">Avatar</label>
                            <input type="avatar" name="avatar" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.avatar} placeholder="Image url"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor='name'>Name</label>
                            <input type="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Name"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className=''>
                            <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">{formik.isSubmitting ? "Loading.." : "Update"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
