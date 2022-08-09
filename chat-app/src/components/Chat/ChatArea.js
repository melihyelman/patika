import { SearchIcon } from '@heroicons/react/outline';
import { HashtagIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase'
import Message from './Message';

const ChatArea = ({ currentChannel }) => {
    useFirebaseConnect([{ path: `/messages/${currentChannel.key}`, storeAs: 'messages' }])
    const firebase = useFirebase();
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const profile = useSelector(state => state.firebase.profile)
    const currentUserId = useSelector(state => state.firebase.auth.uid)
    const messages = useSelector(state => state.firebase.ordered.messages)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            firebase.push(`messages/${currentChannel.key}`, {
                content: message,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: currentUserId,
                    name: profile.name,
                    avatar: profile.avatar
                },
            })
                .then(() => setMessage(""))
        }
    }
    const ref = useRef();
    const scrollToBottom = () => {
        ref.current.scrollIntoView({ block: "end", inline: "nearest" });
    }

    useEffect(() => scrollToBottom(), [messages]);

    const filteredMessages = search.trim() !== "" ? messages.filter(message => message.value.content.toLowerCase().includes(search.toLowerCase()) || message.value.user.name.toLowerCase().includes(search.toLowerCase())) : messages;
    return (
        <>
            <div className='flex-1 relative flex-col w-full h-full p-5 bg-[#eee]'>
                <div className='flex justify-between h-16 items-center border-b pb-3 mb-3 border-b-blue-400 flex-wrap'>
                    <div className='flex justify-center items-center'><HashtagIcon className='w-6 h-6 text-blue-800' /> <span className='pl-1 text-sm'>{currentChannel.name}</span></div>
                    <div className='relative'>
                        <SearchIcon className='w-5 h-5 text-white absolute top-3 left-2' />
                        <input className='bg-blue-700 p-2 pl-8 rounded-lg focus:outline-none border border-white text-white placeholder:text-white ' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search message or username' />
                    </div>
                </div>
                <div className='flex  h-[calc(100%_-_9rem)]  overflow-auto flex-col space-y-3'>
                    {filteredMessages && filteredMessages.map(({ key, value }) => (
                        <Message key={key} value={value} from={value.user.id === currentUserId ? true : false} />
                    ))}
                    <div ref={ref}></div>
                </div>
                <form onSubmit={handleSubmit} className='flex my-3 h-16'>
                    <input className='w-full px-4 rounded-l-lg focus:outline-none' placeholder={`Message for ${currentChannel.name} channel`} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='submit' className='bg-blue-800 w-16 text-white p-2 rounded-r-lg focus:outline-none'
                    >Send </button>
                </form >

            </div >
        </>
    )
}

export default ChatArea