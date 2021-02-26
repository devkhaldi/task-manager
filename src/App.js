import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Doctors Appointment', date: 'Feb 5th at 2:30pm' },
        { id: 2, title: 'Meeting at school', date: 'Feb 6th at 2:30pm' },
        { id: 3, title: 'Food shopping', date: 'Feb 7th at 2:30pm' },
    ])
    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default App
