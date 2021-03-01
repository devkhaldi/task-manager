import axios from 'axios'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([])

    // Add task form state
    const [formTask, setFormTask] = useState({ id: tasks.length, title: '', date: '', reminder: false })

    useEffect(() => {
        axios
            .get('http://localhost:5000/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err))
    }, [])

    const onDelete = id => {
        if (window.confirm('Delete task ')) setTasks(tasks.filter(task => task.id !== id))
    }
    const onDoubleClick = id => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    }
    const addTask = () => {
        if (formTask.title && formTask.date) {
            setTasks([...tasks, formTask])
            setFormTask({ ...formTask, id: formTask.id + 1, title: '', date: '' })
        }
    }

    return (
        <div className='container'>
            <Header addTask={addTask} />
            <AddTask formTask={formTask} setFormTask={setFormTask} />
            <Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={onDoubleClick} />
        </div>
    )
}

export default App
