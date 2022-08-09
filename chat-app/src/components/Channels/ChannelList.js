import { HashtagIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase'
import Loading from "../Loading"
import { setCurrentChannel } from "../../store/action/channel"

const ChannelList = () => {
    useFirebaseConnect([{ path: "channels" }])
    const dispatch = useDispatch()
    const channels = useSelector(state => state.firebase.ordered.channels)
    const currentChannel = useSelector(state => state.channels.currentChannel)
    const [firstMount, setFirstMount] = useState(false)

    useEffect(() => {
        if (!firstMount && !isEmpty(channels)) {
            const { key, value } = channels[0]
            dispatch(setCurrentChannel({ key, ...value }))
            setFirstMount(true)
        }
    }, [])

    const handleClickChannel = (channel) => {
        dispatch(setCurrentChannel(channel))
    }

    if (!isLoaded(channels)) return <Loading />

    if (isEmpty(channels)) return <nav><a href='#/' className='flex justify-between items-center text-red-500 font-semibold text-base bg-blue-700 rounded-lg  py-2.5  px-4'> There are no channel yet.</a></nav>

    return (
        <nav className='space-y-2'>
            {channels.map(({ key, value }) => (
                <li key={key}
                    onClick={() => handleClickChannel({ key, ...value })}
                    className={`flex cursor-pointer justify-between items-center transition duration-200 ${currentChannel?.key === key ? "bg-blue-700" : ""} 
                hover:bg-blue-700 rounded-lg  py-2.5 px-4`}>
                    {value?.name}
                    <HashtagIcon className='w-4 h-4' />
                </li>
            ))}
        </nav>
    )
}

export default ChannelList