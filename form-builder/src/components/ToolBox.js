import { DragItem } from './DragItem';

export const ToolBox = () => {
    return (
        <div className='w-full md:w-2/6 bg-zinc-500 rounded px-4 py-2'>
            <h1 className='text-2xl text-center text-white font-bold'>Toolbox</h1>
            <div className='flex flex-col gap-4 mt-4'>
                <DragItem type="text-input">
                    <div className='flex items-center text-white font-semibold rounded hover:bg-zinc-400 transition-all cursor-pointer gap-4 border border-dashed px-4 py-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8l-3-3v2H5v2h12.5v2l3-3z"></path></svg>
                        Text Input
                    </div>
                </DragItem>
                <DragItem type="text-area">
                    <div className='flex items-center text-white font-semibold rounded hover:bg-zinc-400 transition-all cursor-pointer gap-4 border border-dashed px-4 py-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8l-3-3v2H5v2h12.5v2l3-3z"></path></svg>
                        Text Area
                    </div>
                </DragItem>
                <DragItem type="dropdown">
                    <div className='flex items-center text-white font-semibold rounded hover:bg-zinc-400 transition-all cursor-pointer gap-4 border border-dashed px-4 py-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M147.6 210.7c-7.5 7.5-7.5 19.8 0 27.3l95.7 95.4c7.3 7.3 19.1 7.5 26.6.6l94.3-94c3.8-3.8 5.7-8.7 5.7-13.7 0-4.9-1.9-9.9-5.6-13.6-7.5-7.5-19.7-7.6-27.3 0l-81 79.8-81.1-81.9c-7.5-7.5-19.7-7.5-27.3.1z"></path><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm332.4-124.4C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6z"></path></svg>
                        Text Dropdown
                    </div>
                </DragItem>
            </div>
        </div>
    )
}
