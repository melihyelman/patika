import MarkdownEditor from '@uiw/react-markdown-editor';
import { useState } from 'react';
import { NoteList } from './components/NoteList';
import { nanoid } from 'nanoid'

export const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [markdown, setMarkdown] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);

  const handleClick = () => {
    if (markdown.trim !== "" && editNoteId === null) {
      setNotes([...notes, { note: markdown, date: new Date(), id: nanoid() }]);
      localStorage.setItem('notes', JSON.stringify([...notes, { note: markdown, date: new Date(), id: nanoid() }]));
      setMarkdown("");
    } else if (markdown.trim !== "" && editNoteId !== null) {
      const note = notes.find(note => note.id === editNoteId);
      note.note = markdown;
      const otherNotes = notes.filter(note => note.id !== editNoteId);
      setEditNoteId(null);
      setNotes([...otherNotes, note]);
      localStorage.setItem('notes', JSON.stringify([...otherNotes, note]));
    }
  }

  const deleteNote = (id) => {
    const otherNotes = notes.filter(note => note.id !== id);
    setNotes(otherNotes);
    localStorage.setItem('notes', JSON.stringify(otherNotes));
  }

  const text = () => {
    if (markdown.trim() === "" && editNoteId === null) {
      return "You can write below area."
    } else if (markdown.trim() !== "" && editNoteId !== null) {
      return "You are editing note at the moment."
    } else {
      return "Save this note."
    }
  }

  return (
    <div className='bg-[#0d1111] h-full' data-color-mode="dark">
      <div className='container mx-auto py-8 h-full'>
        <button onClick={handleClick} className={`flex items-center justify-center font-bold w-full transition-all p-3 rounded-md  ${markdown === "" ? "bg-[#8b949e]" : "bg-[#1b1b2] border border-[#8b949e] text-gray-500 cursor-pointer"}`}>{text()}</button>
        <MarkdownEditor
          value={markdown}
          visible
          className="w-full h-1/2 my-8"
          onChange={(value, viewUpdate) => setMarkdown(value)}
          toolbars={[]}
        />
        <NoteList notes={notes} setMarkdown={setMarkdown} setEditNoteId={setEditNoteId} deleteNote={deleteNote} />
      </div>

    </div>
  );
}

export default App;
