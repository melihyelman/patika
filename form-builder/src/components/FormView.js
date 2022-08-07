import { useSelector } from 'react-redux'

export const FormView = () => {
    const { elements } = useSelector((state) => state.global)
    console.log(elements)
    return elements.map(element => {
        return element.type !== 'dropdown' ? (
            <div className='w-full'>
                {element.placeholder}
                <input className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500' type="text" />
            </div>
        ) : <div className='w-full'>
            {element.placeholder}
            <select className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500'>
                {element.options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    }
    )
    // (
    //     <div className='w-full'>
    //         Display Label
    //         <input className='mt-1 w-full rounded outline-none px-4 py-2 border border-zinc-300 focus:border-zinc-500' type="text" />
    //     </div>
    // )
}
