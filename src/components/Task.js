import { FaTimes } from 'react-icons/fa'

const Task = ({ task: { title, date, reminder } }) => {
    return (
        <div className='task'>
            <FaTimes />
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
    )
}

export default Task
