import React, { useEffect, useState } from 'react';
import CreateColumnButton from '../components/CreateColumnButton';
import SingleColumn from '../components/SingleColumn';
import HiddenColumns from '../components/HiddenColumns';
import Grid, { GridSize } from '@mui/material/Grid';
import Columns from '../types/Columns';
import {
    DragDropContext,
    DropResult,
    Droppable,
    Draggable,
} from 'react-beautiful-dnd';

const mockData = {
    name: 'default',
    parent: null,
    columns: [
        {
            name: 'To do',
            default: true,
            position: 0,
            status: 'display',
            tasks: [],
        },
        {
            name: 'Doing',
            default: false,
            position: 1,
            status: 'display',
            tasks: [],
        },
        {
            name: 'Done',
            default: true,
            position: 2,
            status: 'display',
            tasks: [],
        },
    ],
};

function Kanban() {
    const [columns, setColumns] = useState<Columns[]>([]);
    const xs: GridSize = 'auto';

    useEffect(() => {
        const filteredColumns = mockData.columns.filter(
            (column) =>
                column.status === 'display' ||
                column.status === 'new' ||
                column.status === 'rename'
        );
        setColumns(filteredColumns as Columns[]);
    }, []);

    function createColumn() {
        if (!columns.some((column) => column.status === 'new')) {
            const newColumns = [...columns];
            newColumns.push({
                name: 'Waiting',
                default: true,
                position: columns.length,
                status: 'new',
                tasks: [],
            });

            setColumns(newColumns);
        }
    }

    function setColumnName(name: string, position: number) {
        if (name) {
            const newColumns = [...columns];
            const columnIndex = newColumns.findIndex(
                (element) => element.position === position
            );
            newColumns[columnIndex].name = name;
            newColumns[columnIndex].status = 'display';
            setColumns(newColumns);
        }
    }

    function setColumnStatus(
        status: 'display' | 'new' | 'rename',
        position: number
    ) {
        const newColumns = [...columns];
        const columnIndex = newColumns.findIndex(
            (element) => element.position === position
        );
        newColumns[columnIndex].status = status;
        setColumns(newColumns);
    }

    function deleteColumn(position: number) {
        const newColumns = columns.filter(
            (column) => column.position !== position
        );
        setColumns(newColumns);
    }

    function onDragEnd(result: DropResult) {
        console.log(result);
    }

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <Grid
                container
                spacing="3%"
                wrap="nowrap"
                marginLeft="auto"
                width="auto"
                sx={{ overflow: 'auto' }}
            >
                <Droppable droppableId="kanban" direction="horizontal">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                display: 'flex',
                                padding: 'grid',
                                width: '70%',
                                paddingTop: '3%',
                            }}
                        >
                            {provided.placeholder}
                            {columns.map((column) => (
                                <Draggable
                                    draggableId={column.position.toString()}
                                    index={column.position}
                                >
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            style={{
                                                marginLeft: '1%',
                                                marginRight: '1%',
                                                width: '70%',
                                            }}
                                        >
                                            <SingleColumn
                                                key={column.position}
                                                column={column}
                                                xs={xs}
                                                setColumnName={setColumnName}
                                                deleteColumn={deleteColumn}
                                                setColumnStatus={
                                                    setColumnStatus
                                                }
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
                <Grid key={columns.length + 1} item xs={xs}>
                    <CreateColumnButton createColumn={createColumn} />
                    <HiddenColumns
                        columns={columns.filter(
                            (column) => column.status === 'hide'
                        )}
                    />
                </Grid>
            </Grid>
        </DragDropContext>
    );
}

export default Kanban;
