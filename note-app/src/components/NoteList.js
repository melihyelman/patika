import React from 'react'
import { Note } from './Note'

export const NoteList = ({ notes, setMarkdown, setEditNoteId, deleteNote }) => {
    return (
        <div className='flex flex-col gap-4 py-4 bg-[#393F48] rounded-md '>
            {notes.length > 0 ? <span className='text-xl font-bold text-center text-[#C9D1D9] pb-4 border-b border-[#161B22]'>You have these notes.</span> : <span className='text-xl font-bold text-center text-[#C9D1D9] border-[#161B22]'>You don't have any notes yet.</span>}
            {notes.length > 0 && (
                <div className='flex flex-wrap flex-col md:flex-row gap-4 px-4'>
                    {notes.map(note =>
                        <Note key={note.date} note={note} setMarkdown={setMarkdown} setEditNoteId={setEditNoteId} deleteNote={deleteNote} />
                    )}
                </div>
            )}
        </div>
    )
}
