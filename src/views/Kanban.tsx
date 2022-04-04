import React, { useState } from 'react';
import CreateColumnButton from '../components/CreateColumnButton';
import SingleColumn from '../components/SingleColumn';

function Kanban() {
    const [columns, setColumns] = useState([]);
    function createColumn() {}
    return (
        <div>
            <CreateColumnButton createColumn={createColumn} />
        </div>
    );
}

export default Kanban;
