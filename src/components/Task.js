import { FaTimes } from 'react-icons/fa'

const Task = ({ task: { id, title, date, reminder }, onDelete, onDoubleClick }) => {
  return (
    <div className={reminder ? 'task reminder' : 'task'} onDoubleClick={() => onDoubleClick(id)}>
      <FaTimes onClick={() => onDelete(id)} />
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  )
}

export default Task
