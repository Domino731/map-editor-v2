import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {TreeModel} from "../../../../models/tree.ts";
import {Checkbox} from "@mui/material";
import {useMemo, useState} from "react";
import Button from "@mui/material/Button";
import styles from './ObjectDrop.module.scss';
import {AddNewDropForm} from "./AddNewDropForm.tsx";

interface Column {
    id: 'id' | 'chance' | 'amount'
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number | string | number[]) => string;
}

const columns: readonly Column[] = [
    {id: 'id', label: 'ID', format: (v: string | number | number[]) => `${v}`},
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


interface ObjectDropProps {
    objectData: TreeModel;
}

export const ObjectDrop = ({objectData}: ObjectDropProps) => {
    return (
        <div className={styles.container}>
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
                            {objectData.specs.stages[0].drop
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            <TableCell>
                                                <Button color="error" variant="contained" onClick={() => {
                                                    alert("TODO")
                                                }}>
                                                    DELETE
                                                </Button>
                                            </TableCell>

                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format(value)}
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
                <AddNewDropForm/>
            </div>
        </div>

    );
}
