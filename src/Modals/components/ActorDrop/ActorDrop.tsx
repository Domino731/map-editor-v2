import {findItem} from "../../../const/items/allItems.ts";
import styles from './ActorDrop.module.scss';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {GameObjectDrop} from "../../../models/GameObject.ts";
import Button from "@mui/material/Button";
import {ObjectStageSelect} from "../../ObjectDetailsModal/components/ObjectStageSelect";
import {ActorDropForm} from "../ActorDropForm";
import {ActorDropFormikFormData} from "../ActorDropForm/ActorDropForm.types.ts";

interface Column {
    id: 'id' | 'name' | 'chance' | 'amount'
    label: string;
    minWidth?: number;
    align?: 'right';
    format: (value: number | string | number[]) => string;
}

const columns: readonly Column[] = [
    {id: 'id', label: 'ID', format: (v: string | number | number[]) => `${v}`},
    {id: 'name', label: 'Name', format: (v: string | number | number[]) => findItem(v as string)?.name ?? '[Unknown]'},
    {
        id: 'chance', label: 'Chance', format: (v: string | number | number[]) => {
            if (Array.isArray(v)) {
                return `${v[0]} - ${v[1]}`
            } else {
                return `${v}`;
            }
        }
    },
    {
        id: 'amount', label: 'Amount', format: (v: string | number | number[]) => {
            if (Array.isArray(v)) {
                return `${v[0]} - ${v[1]}`
            } else {
                return `${v}`;
            }
        }
    },
];


interface ActorDropProps {
    dropData: GameObjectDrop[];
    onDropDelete: (uuid: string) => void;
    isStageSelectVisible?: boolean;
    onDropAdd: (v: ActorDropFormikFormData) => void;
}

export const ActorDrop = ({dropData, onDropDelete, isStageSelectVisible, onDropAdd}: ActorDropProps) => {
    return <div className={styles.container}>
        <div className={styles.table}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>

                        <TableRow>
                            <TableCell padding="checkbox">

                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dropData
                            .map((row: GameObjectDrop) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.uuid}>
                                        <TableCell>
                                            <Button color="error" variant="contained"
                                                    onClick={() => onDropDelete(row.uuid)}>
                                                DELETE
                                            </Button>
                                        </TableCell>

                                        {columns.map((column) => {
                                            const value = row[column.id as keyof GameObjectDrop];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format(column.id === 'name' ? row.id : value)}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className={styles.form}>
            {isStageSelectVisible && <ObjectStageSelect/>}
            <ActorDropForm onDropAdd={onDropAdd}/>
        </div>
    </div>
}