import React from 'react';
import Kanban from './views/Kanban';

const appStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
};

function App() {
    return (
        <div style={appStyle}>
            <Kanban />
        </div>
    );
}

export default App;
