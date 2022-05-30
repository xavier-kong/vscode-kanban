import React from 'react';
import Kanban from './views/Kanban';

const mockData = {
    name: 'default',
    parent: null,
    columns: [
        {
            name: 'To do',
            default: true,
            position: 0,
            status: 'display',
        },
        {
            name: 'Doing',
            default: false,
            position: 1,
            status: 'display',
        },
        {
            name: 'Done',
            default: true,
            position: 2,
            status: 'display',
        },
    ],
    tasks: [
        {
            name: 'test',
            column: 'To do',
            position: 0,
        },
    ],
};

function App() {
    return <Kanban data={mockData} />;
}

export default App;
