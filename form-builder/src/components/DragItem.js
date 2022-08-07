import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { addAtElement, addElement } from '../redux/globalSlice'

export const DragItem = ({ type, index, moveElement, children }) => {
    const dispatch = useDispatch()

    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: "elements",
        hover(item, monitor) {
            if (!index && index !== 0) return
            if (!item.index && item.index !== 0) {
                dispatch(
                    addAtElement({
                        type: item.type,
                        index: index,
                    })
                )
                item.index = index
                return
            }
            if (!ref.current) return
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

            moveElement(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: "elements",
        item: () => ({ index, type }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.4 : 1
    drag(drop(ref))
    const handleClick = () => {
        if (!index && !moveElement) {
            dispatch(addElement({ type }))
        }
    }

    return (
        <div
            ref={ref}
            style={{ opacity }}
            className="mb-4 rounded cursor-grab active:cursor-grabbing hover:bg-zinc-400 relative"
            onClick={handleClick}
        >
            {children}
        </div>
    )
}

