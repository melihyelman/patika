import moment from 'moment'
import React from 'react'

const Message = ({ value, from }) => {
    return (
        <div className={`w-full px-2 relative bg-blue-200 rounded-lg py-3 ${from ? "flex flex-col text-right " : ""}`}>
            <div className={`flex items-center ${from ? "float-right flex-row-reverse" : ""}`}>
                <img src={value.user.avatar} alt="avatar" className={`w-10 h-10 rounded-full ${from ? "ml-2" : "mr-2"}`} />
                <p className="flex flex-col space-y-1">
                    <span className='text-gray-900 font-semibold leading-none'>{value.user.name} </span>
                    <span className='text-xs'>{moment(value.timestamp).fromNow()}</span></p>
            </div>
            <div className={`text-sm mt-2 ${from ? "pr-12" : "pl-12"}`}>
                <p className="w-full text-gray-600 break-all">{value.content}</p>
            </div>
        </div>
    )
}

export default Message