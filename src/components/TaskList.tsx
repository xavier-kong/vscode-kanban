import Tasks from '../types/Tasks';
import SingleTask from './SingleTask';

interface PropTypes {
    tasks: Tasks[];
}

function TaskList({ tasks }: PropTypes) {
    return (
        <div>
            {tasks.map((task) => (
                <SingleTask task={task} />
            ))}
        </div>
    );
}

export default TaskList;
