import React from 'react';
import Kanban from './views/Kanban';
import { DragDropContext } from 'react-beautiful-dnd';

function onDragEnd() {}

function App() {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Kanban />
        </DragDropContext>
    );
}

export default App;
