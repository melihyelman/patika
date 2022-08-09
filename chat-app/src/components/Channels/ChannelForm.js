import { AtSymbolIcon, DocumentIcon, XIcon } from '@heroicons/react/solid';
import { useFormik } from 'formik';
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const ChannelForm = ({ isOpen, toggleOpenModal }) => {
    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([])
    const ref = useRef();
    const profile = useSelector(state => state.firebase.profile);

    console.log(profile)

    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        // validationSchema,
        onSubmit: async (values, bag) => {
            //
            setFbErrors([]);
            firebase.push('channels', {
                ...values, createdBy: {
                    name: profile.name,
                    avatar: profile.avatar
                }
            })
            toggleOpenModal();
        }
    })
    const handleClick = (e) => {
        if (ref.current === e.target)
            toggleOpenModal()
    }
    return (
        <div id="modal" className={`${isOpen ? "" : "hidden"} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 transition duration-200`} ref={ref} onClick={handleClick}>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg  w-128 rounded-md bg-white max-w-md">
                <div className="flex justify-between items-center bg-blue-800 text-white text-xl rounded-t-md p-4 ">
                    <h3>Create a New Channel</h3>
                    <button onClick={() => toggleOpenModal()}><XIcon className='w-6 h-6' /></button>
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col">
                    <div className="w-full m-auto p-4 space-y-2">
                        <div className='relative'>
                            <label htmlFor='name' className='absolute pr-0.5 left-2 top-5 '><AtSymbolIcon className='w-5 h-5' /></label>
                            <input type="name" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Channel Name"
                                className="w-full pl-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className='relative'>
                            <label htmlFor='description' className='absolute pr-0.5 left-2 top-5 '><DocumentIcon className='w-5 h-5' /></label>
                            <input type="description" id='description' name="description" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} placeholder="Description"
                                className="w-full pl-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                    </div>

                    <div className="px-4 py-2 border-t border-t-gray-400 flex justify-end items-center space-x-4">
                        <button type='submit' className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Create</button>
                    </div>
                </form>
            </div>
        </div >

    )
}

export default ChannelForm