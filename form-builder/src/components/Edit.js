
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeEdit } from '../redux/editSlice';
import { updateElement } from '../redux/globalSlice';

export const Edit = () => {

    const { edit, activeId } = useSelector((state) => state.edit);
    const { elements } = useSelector((state) => state.global);
    const element = elements.find((element) => element.id === activeId);
    const [placeholder, setPlaceholder] = useState(element.placeholder)
    const [options, setOptions] = useState(element.options);
    const dispatch = useDispatch()

    const handleSave = () => {
        const payload = {
            ...element,
            placeholder,
        }
        if (element.type === 'dropdown') {
            payload.options = options
        }
        dispatch(
            updateElement({
                id: element.id,
                element: payload,
            })
        )
        dispatch(closeEdit())
    }

    const handleChangeOptionLabel = (index, value) => {
        const newOptions = [...options]
        newOptions[index] = {
            ...newOptions[index],
            label: value,
        }
        setOptions(newOptions)
    }

    const handleChangeOptionValue = (index, value) => {
        const newOptions = [...options]
        newOptions[index] = {
            ...newOptions[index],
            value,
        }
        setOptions(newOptions)
    }

    const handleAddOption = (index) => {
        const newOptions = [...options]
        newOptions.splice(index + 1, 0, {
            label: '',
            value: '',
        })
        setOptions(newOptions)
    }

    const handleDeleteOption = (index) => {
        setOptions((prev) => prev.filter((_, i) => i !== index))
    }


    const renderOptions = () => {
        return (
            <div className='mt-4'>
                {options.map((option, index) => (
                    <div key={index} className='flex items-center justify-between gap-2 text-sm'>
                        <div>
                            Option Label
                            <input type='text' className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500' value={option.label} onChange={(e) => handleChangeOptionLabel(index, e.currentTarget.value)} />
                        </div>
                        <div>
                            Option Value
                            <input type='text' className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500' value={option.value} onChange={(e) => handleChangeOptionValue(index, e.currentTarget.value)} />
                        </div>
                        {options.length > 1 && <button className='mt-[1.25rem] text-red-600 rounded p-1 ring-2 ring-red-600' onClick={() => handleDeleteOption(index)}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </button>}
                    </div>
                ))}
                <div>
                    <button className='w-full bg-green-600 py-2 px-4 mt-4 text-white font-semibold rounded' onClick={() => handleAddOption(options.length)}>Add Option</button>
                </div>
            </div>
        )
    }



    return (
        <div className={`absolute h-full w-full flex flex-col sm:w-[60%] -left-full transition-all ${edit && "left-0"} duration-700 ease-in-out top-0 bg-white p-6`}>

            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-xl font-semibold uppercase'>{element.type.replace("-", " ")}</h1>
                <div onClick={() => dispatch(closeEdit())} className='p-4  hover:bg-[rgba(0,0,0,.1)] hover:rounded-full cursor-pointer transition-all'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1.4rem" width="1.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </div>
            </div>
            <div>
                Display Label
                <input className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500' type="text" value={placeholder} onChange={({ target }) => setPlaceholder(target.value)} />
            </div>
            {element.type === "dropdown" && renderOptions()}
            <div className='mt-auto flex justify-end '>
                <button onClick={handleSave} className="px-5 py-2 text-lg rounded bg-green-600 font-semibold text-white transition-all hover:bg-green-700">Save</button>
            </div>
        </div>
    )
}
