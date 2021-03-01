import axios from 'axios'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const url = 'http://localhost:5000/tasks'
  const [tasks, setTasks] = useState([])

  // Add task form state
  const [formTask, setFormTask] = useState({ title: '', date: '', reminder: false })

  useEffect(() => {
    axios
      .get(url)
      .then(res => setTasks(res.data))
      .catch(err => console.log(err))
  }, [])

  const onDelete = id => {
    if (window.confirm('Delete task')) {
      axios
        .delete(`${url}/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      setTasks(tasks.filter(task => task.id !== id))
    }
  }
  const onDoubleClick = id => {
    const task = tasks.find(task => task.id === id)
    const updatedTask = { ...task, reminder: !task.reminder }
    axios
      .put(`${url}/${id}`, updatedTask)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }
  const addTask = () => {
    if (formTask.title && formTask.date) {
      axios
        .post(url, formTask)
        .then(res => console.log(res))
        .catch(err => console.log(err))
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
