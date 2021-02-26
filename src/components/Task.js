const Task = ({ task: { title, date } }) => {
    return (
        <div className='task'>
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
    )
}

export default Task
