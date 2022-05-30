import React, { useEffect, useState } from 'react';
import CreateColumnButton from '../components/CreateColumnButton';
import SingleColumn from '../components/SingleColumn';
import HiddenColumns from '../components/HiddenColumns';
import Grid, { GridSize } from '@mui/material/Grid';
import Columns from '../types/Columns';
import Tasks from '../types/Tasks';
import {
    DragDropContext,
    DropResult,
    Droppable,
    Draggable,
} from 'react-beautiful-dnd';

interface PropTypes {
    columns: Columns[];
    tasks: Tasks[];
}

function Kanban(props: PropTypes) {
    const [columns, setColumns] = useState<Columns[]>([]);
    const xs: GridSize = 'auto';

    useEffect(() => {
        setColumns(data.columns as Columns[]);
    }, []);

    function createColumn() {
        if (!columns.some((column) => column.status === 'new')) {
            const newColumns = [...columns];
            newColumns.push({
                name: 'Waiting',
                default: true,
                position: columns.length,
                status: 'new',
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
        status: 'display' | 'new' | 'rename' | 'hide',
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
        const { source, destination } = result;

        if (destination) {
            const newColumns = [...columns];

            const [removed] = newColumns.splice(source.index, 1);
            newColumns.splice(destination.index, 0, removed);

            const positions = newColumns
                .map((column) => column.position)
                .sort();

            for (let i = 0; i < newColumns.length; i++) {
                newColumns[i].position = positions[i];
            }

            setColumns(newColumns);
        }
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
                            // can abstract styling, include different styling for on drag
                        >
                            {columns
                                .filter((column) => column.status !== 'hide')
                                .map((column) => (
                                    <Draggable
                                        draggableId={column.position.toString()}
                                        index={column.position}
                                        key={column.position}
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
                                                    ...provided.draggableProps
                                                        .style,
                                                }}
                                            >
                                                <SingleColumn
                                                    key={column.position}
                                                    column={column}
                                                    xs={xs}
                                                    setColumnName={
                                                        setColumnName
                                                    }
                                                    deleteColumn={deleteColumn}
                                                    setColumnStatus={
                                                        setColumnStatus
                                                    }
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Grid key={columns.length + 1} item xs={xs}>
                    <CreateColumnButton createColumn={createColumn} />
                    <HiddenColumns
                        columns={columns.filter(
                            (column) => column.status === 'hide'
                        )}
                        setColumnStatus={setColumnStatus}
                    />
                </Grid>
            </Grid>
        </DragDropContext>
    );
}

export default Kanban;
