import { useState } from 'react'

const AddTask = ({ formTask, setFormTask }) => {
    return (
        <form>
            <input
                value={formTask.title}
                onChange={e => setFormTask({ ...formTask, title: e.target.value })}
                type='text'
                placeholder='Task title'
            />
            <input
                value={formTask.date}
                onChange={e => setFormTask({ ...formTask, date: e.target.value })}
                type='text'
                placeholder='Task Date'
            />
        </form>
    )
}

export default AddTask
