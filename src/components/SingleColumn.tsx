import { useState } from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import ColumnHeader from './ColumnHeader';
import Columns from '../types/Columns';

type Status = 'display' | 'new' | 'rename' | 'hide';

interface PropTypes {
    xs: GridSize;
    column: Columns;
    setColumnName: Function;
    deleteColumn: Function;
    setColumnStatus: (status: Status, position: number) => void;
}

function SingleColumn({
    column,
    xs,
    setColumnName,
    deleteColumn,
    setColumnStatus,
}: PropTypes) {
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
                setColumnStatus={setColumnStatus}
                displayIcon={displayIcon}
            />
        </Grid>
    );
}

export default SingleColumn;
