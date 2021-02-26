const Task = ({ task }) => {
    return (
        <div className='task'>
            <h4>{task.title}</h4>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
