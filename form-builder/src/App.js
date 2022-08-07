import { useState } from 'react';
import { Modal } from './components/Modal';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragArea } from './components/DragArea';
import { ToolBox } from './components/ToolBox';
import { useSelector } from 'react-redux';
import { Edit } from './components/Edit';

function App() {
  const [open, setOpen] = useState(false);
  const { edit } = useSelector((state) => state.edit);

  return (
    <>
      <div className='container mx-auto flex flex-col md:flex-row px-4 py-8 gap-12 h-full'>
        <DndProvider backend={HTML5Backend}>
          <div className='flex flex-col gap-4 w-full md:w-4/6 '>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-bold'>Form Buildir With React</h1>
              <button onClick={() => setOpen(true)} className='py-2 px-4 rounded bg-sky-500 hover:bg-sky-600 transition-all text-white'>Preview</button>
            </div>
            <DragArea />
          </div>
          <ToolBox />
        </DndProvider>
      </div>
      {edit && <Edit />}
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
