import React from 'react';
import CreateColumnButton from '../components/CreateColumnButton';

function Kanban() {
    function createColumn() {}
    return (
        <div>
            <CreateColumnButton createColumn={createColumn} />
        </div>
    );
}

export default Kanban;
