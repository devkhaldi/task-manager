const Header = ({ addTask }) => {
    return (
        <header>
            <h1>Task Manager</h1>
            <button onClick={addTask}>Add task</button>
        </header>
    )
}

export default Header
