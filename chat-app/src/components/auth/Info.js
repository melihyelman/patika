import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const Info = () => {
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);

    const signOut = () => {
        firebase.logout();
    }
    return (
        <div className='flex justify-between items-center space-x-2 pb-6 mb-4 border-b border-b-gray-400'>
            <div className='flex w-full items-center space-x-2'>
                <img src={profile?.avatar} alt='profile' className='rounded-full h-12 w-12' />
                <div className='flex w-full  justify-between items-center '>
                    <span className='font-bold'>{profile.name}</span>
                    <span className='p-2 cursor-pointer hover:text-blue-700' onClick={() => signOut()}><LogoutIcon className='w-5 h-5 ' /></span>
                </div>
            </div>
        </div>

    )
}

export default Info