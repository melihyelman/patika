import moment from 'moment';
import { MdEdit, MdDelete } from 'react-icons/md';

export const Note = ({ note, setMarkdown, setEditNoteId, deleteNote }) => {
    return (
        <div className='border rounded-lg border-[#0D1117] py-2 w-full md:w-[32%] flex flex-col' >
            <div className='pb-1 border-b border-[#0D1117]'>
                <div className='flex justify-between items-center px-4'>
                    <span className='p-2 cursor-pointer border-r border-[#0D1117]' onClick={() => deleteNote(note.id)}><MdDelete color='red' size={20} /></span>
                    <span className='px-2 text-sm text-center truncate text-[#C9D1D9]'>{moment(note.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    <span className='p-2 cursor-pointer border-l border-[#0D1117]' onClick={() => { setMarkdown(note.note); setEditNoteId(note.id) }}><MdEdit color="green" size={20} /></span>
                </div >
            </div>
            <div className='pt-4 pb-2 px-4 truncate'>
                {note.note}
            </div>
        </div>
    )
}
