import Tasks from '../types/Tasks';

interface PropTypes {
    tasks: Tasks[];
}

function TaskList({ tasks }: PropTypes) {
    return (
        <div>
            {tasks.map((task) => (
                <div>{task.name}</div>
            ))}
        </div>
    );
}

export default TaskList;
