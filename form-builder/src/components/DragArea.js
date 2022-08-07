import { useDrop } from 'react-dnd'
import { DragItem } from './DragItem'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { addElement, moveElement } from '../redux/globalSlice'
import { FormItem } from './FormItem'

export const DragArea = () => {
    const { elements } = useSelector((state) => state.global)
    const dispatch = useDispatch()

    const ref = useRef(null)

    const [, drop] = useDrop(() => ({
        accept: "elements",
        drop: (item) => {
            if (!item.index && item.index !== 0 && elements.length < 1) {
                dispatch(
                    addElement({
                        type: item.type,
                    })
                )
            }
        },
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
    }))

    drop(ref)


    return (
        <div className='flex-1 bg-zinc-500 rounded py-8 px-4' ref={ref}>
            {elements.length > 0 ? (
                elements.map((element, index) => (
                    <DragItem key={element.id} index={index} type={element.type} moveElement={(from, to) => dispatch(moveElement({ from, to }))}>
                        <FormItem {...element} />
                    </DragItem>
                ))
            ) : (
                <div className="text-center p-10 border-2 border-dashed border-slate-700">
                    <h1>Drop Element here</h1>
                </div>
            )}
        </div>
    )
}
