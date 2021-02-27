import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        { id: 0, title: 'Doctors Appointment', date: 'Feb 5th at 2:30pm', reminder: true },
        { id: 1, title: 'Meeting at school', date: 'Feb 6th at 2:30pm', reminder: true },
        { id: 2, title: 'Food shopping', date: 'Feb 7th at 2:30pm', reminder: false },
    ])

    // Add task form state
    const [formTask, setFormTask] = useState({ id: tasks.length, title: '', date: '', reminder: false })

    const onDelete = id => {
        if (window.confirm('Delete task ')) setTasks(tasks.filter(task => task.id !== id))
    }

    const onDoubleClick = id => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    }

    return (
        <div className='container'>
            <Header />
            <AddTask formTask={formTask} setFormTask={setFormTask} />
            <Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={onDoubleClick} />
        </div>
    )
}

export default App
