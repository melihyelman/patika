import { useDispatch } from 'react-redux'
import { openEdit } from '../redux/editSlice'
import { removeElement } from '../redux/globalSlice'

const TextInput = ({ placeholder }) => {
    return (
        <div className="px-4 py-2  flex flex-col gap-1">
            {placeholder}
            <input
                type="text"
                className="bg-white p-1 rounded-lg border border-slate-300"
            />
        </div>
    )
}

const TextArea = ({ placeholder }) => {
    return (
        <div className="px-4 py-2  flex flex-col gap-1">
            {placeholder}
            <textarea
                rows={3}
                className="bg-white p-1 rounded-lg border border-slate-300"
            />
        </div>
    )
}

const DropDown = ({ placeholder, options }) => {

    return (
        <div className="px-4 py-2 flex flex-col gap-1">
            {placeholder}
            <select className="bg-white p-2 rounded-lg border border-slate-300">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

const Types = {
    "text-input": TextInput,
    "text-area": TextArea,
    "dropdown": DropDown,
}


export const FormItem = (props) => {


    const dispatch = useDispatch()

    const deleteClick = () => {
        dispatch(removeElement({ id: props.id }))
    }

    const editClick = () => {
        dispatch(openEdit({ id: props.id }))
    }

    return (
        <>
            {Types[props.type]({ ...props })}
            <div className="group absolute inset-0 bg-transparent opacity-0 hover:opacity-100 flex p-2 px-10">
                <div className="h-max p-1 px-2 rounded text-xs font-semibold text-white bg-zinc-500 uppercase">
                    {props.type.replace("-", " ")}
                </div>
                <div className="flex gap-4 p-1 items-center text-lg h-max ml-auto">
                    <button onClick={editClick}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>
                    </button>
                    <button onClick={deleteClick}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"></path></g></svg>
                    </button>
                </div>
            </div>
        </>
    )
}
