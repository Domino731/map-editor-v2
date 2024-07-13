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
import {findItem} from "../../../../const/allItems.ts";
import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";

interface Column {
    id: 'id' | 'name' | 'chance' | 'amount'
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number | string | number[]) => string;
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


export const ObjectDrop = () => {
    const dispatch = useDispatch();

    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;

    if (!objectData) return <>Loading...</>
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
                            {objectData.specs.stages[objectStage].drop
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            <TableCell>
                                                <Button color="error" variant="contained" onClick={() => {
                                                    dispatch(objectDetailsModalSliceActions.deleteDrop(row.uuid))
                                                }}>
                                                    DELETE
                                                </Button>
                                            </TableCell>

                                            {columns.map((column) => {
                                                const value = row[column.id];
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
                <AddNewDropForm/>
            </div>
        </div>

    );
}
