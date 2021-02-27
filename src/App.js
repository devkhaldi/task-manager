import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Doctors Appointment', date: 'Feb 5th at 2:30pm', reminder: true },
        { id: 2, title: 'Meeting at school', date: 'Feb 6th at 2:30pm', reminder: true },
        { id: 3, title: 'Food shopping', date: 'Feb 7th at 2:30pm', reminder: false },
    ])

    const onDelete = id => {
        if (window.confirm('Delete task ')) setTasks(tasks.filter(task => task.id !== id))
    }

    const onDoubleClick = id => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    }

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={onDoubleClick} />
        </div>
    )
}

export default App
