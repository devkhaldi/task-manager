import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
    if (tasks.length === 0) return <div className='tasks'>No tasks to show</div>
    return (
        <div className='tasks'>
            {tasks.map(task => (
                <Task key={task.id} task={task} onDelete={onDelete} onDoubleClick={onDoubleClick} />
            ))}
        </div>
    )
}

export default Tasks
