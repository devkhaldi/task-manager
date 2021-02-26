import { FaTimes } from 'react-icons/fa'

const Task = ({ task: { id, title, date, reminder }, onDelete }) => {
    return (
        <div className='task'>
            <FaTimes onClick={() => onDelete(id)} />
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
    )
}

export default Task
