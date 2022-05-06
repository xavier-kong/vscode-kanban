export default interface Columns {
    name: string;
    default: boolean;
    status: 'display' | 'new' | 'rename' | 'hide';
    position: number;
    tasks: never[];
}
