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
        // {
        //     "draggableId": "0",
        //     "type": "DEFAULT",
        //     "source": {
        //         "index": 0,
        //         "droppableId": "kanban"
        //     },
        //     "reason": "DROP",
        //     "mode": "FLUID",
        //     "destination": {
        //         "droppableId": "kanban",
        //         "index": 1
        //     },
        //     "combine": null
        // }

        // const { source, destination } = result;
        // const newColumns = columns;
        // let columnToMoveIndex = source.index;
        // const placesToMove = destination ? destination.index - source.index : 0;
        // const steps = placesToMove >= 0 ? 1 : -1;

        // for (let i = 1; i <= placesToMove; i++) {
        //     const columnToSwapToIndex = newColumns.findIndex(
        //         (column) => column.position === columnToMoveIndex + steps
        //     );
        // }

        // same logic for moving backwards or forwards
        // direction = sign of destination index - source index
        // get index of column with source index / column position
        // for loop with number of swaps based on number of places to move (regardless of direction)
        //    find index of next column in direction of swap
        //    swap positions of neighboring column
        //    increment/decrement index tracker of column to move

        // or maybe you could do forEach in newColumns where position in range add steps (1 or -1)
        // then column to move change index

        const { source, destination } = result;

        const newColumns = columns;
        if (destination) {
            const diff = destination.index - source.index;
            if (diff !== 0) {
                const swapRangeStart = Math.min(
                    source.index,
                    destination.index
                );
                const swapRangeEnd = Math.max(source.index, destination.index);
                const steps = destination.index - source.index >= 0 ? 1 : -1;
                for (let i = 0; i < newColumns.length; i++) {
                    if (
                        newColumns[i].position >= swapRangeEnd ||
                        newColumns[i].position <= swapRangeStart
                    ) {
                        newColumns[i].position += steps;
                    }
                }
            }
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
