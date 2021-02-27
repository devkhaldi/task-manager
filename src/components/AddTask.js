import { useState } from 'react'

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    return (
        <form>
            <input value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='Task title' />
            <input value={date} onChange={e => setDate(e.target.value)} type='text' placeholder='Task Date' />
        </form>
    )
}

export default AddTask
