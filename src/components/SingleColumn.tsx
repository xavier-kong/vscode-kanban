import { useState } from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import ColumnHeader from './ColumnHeader';

interface PropTypes {
    xs: GridSize;
    column: Columns;
    setColumnName: Function;
    deleteColumn: Function;
}

interface Columns {
    name: string;
    default: boolean;
    status: string;
    position: number;
    tasks: never[];
}

function SingleColumn({ column, xs, setColumnName, deleteColumn }: PropTypes) {
    const { name, status, position } = column;
    const [displayIcon, setDisplayIcon] = useState(false);

    return (
        <Grid
            item
            xs={xs}
            sx={{ color: '#FFF' }}
            onMouseEnter={() => setDisplayIcon(true)}
            onMouseLeave={() => setDisplayIcon(false)}
            minWidth="20%"
        >
            <ColumnHeader
                name={name}
                status={status}
                position={position}
                setColumnName={setColumnName}
                deleteColumn={deleteColumn}
                displayIcon={displayIcon}
            />
        </Grid>
    );
}

export default SingleColumn;
