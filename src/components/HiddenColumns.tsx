interface Column {
    name: string;
    default: boolean;
    status: 'display' | 'new' | 'rename' | 'hide';
    position: number;
    tasks: never[];
}

interface PropTypes {
    columns: Column[];
}

function HiddenColumns({ columns }: PropTypes) {
    return <div>HELLo!</div>;
}

export default HiddenColumns;
