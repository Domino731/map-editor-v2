import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import styles from './VectorForm.module.scss';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {Vector} from "../../../../types.ts";
import {ChangeEvent, useCallback} from "react";
import {ActionVector} from "../../../../models/tree.ts";
import {ObjectActions, OBJECTS_ACTIONS_OPTIONS} from "../../../../const/app.ts";
import Button from "@mui/material/Button";
import {contrastColors} from "../../ObjectDetailsModel.const.ts";

export interface VectorFormProps {
    title: string;
    data: Vector;
    onChange: (v: Vector) => void;
    labels?: {
        x?: string;
        y?: string;
        width?: string;
        height?: string;
    }
}

export const VectorForm = ({title, data, onChange, labels}: VectorFormProps) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        onChange({...data, [name]: Number(value)})
    }, [data, onChange])

    return <div>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.inputRow}>
                    <TextField onChange={handleChange} name="x" value={data.x}
                               label={(labels && labels.x) ? labels.x : 'X'} className={styles.input} type="number"/>
                    <TextField onChange={handleChange} name="y" value={data.y}
                               label={(labels && labels.y) ? labels.y : 'Y'} className={styles.input} type="number"/>
                </div>
                <div className={styles.inputRow}>
                    <TextField onChange={handleChange} label={(labels && labels.width) ? labels.width : 'Width'}
                               type="number"
                               name="width"
                               value={data.width}
                               className={styles.input}/>
                    <TextField onChange={handleChange} label={(labels && labels.height) ? labels.height : 'Height'}
                               type="number"
                               name="height"
                               value={data.height}
                               className={styles.input}/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
}

export interface ActionVectorFormProps {
    title: string;
    data: Array<ActionVector>;
    onChange: (v: Array<ActionVector>) => void;
}

export const ActionVectorForm = ({title, data, onChange}: ActionVectorFormProps) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent, index: number) => {
        const {target: {name, value}} = e;
        const newData = [...data];
        newData[index] = {...newData[index], [name]: Number(value)}
        onChange(newData)
    }, [data, onChange]);

    const handleAddNewAction = useCallback(() => {
        onChange([...data, {
            x: 0,
            y: 0,
            width: 10,
            height: 10,
            actionType: ObjectActions.Cut,
            color: contrastColors[data.length]
        }])
    }, [data, onChange])

    const handleDeleteAction = useCallback((index: number) => {
        const newData = [...data].filter((_, i) => i !== index);
        newData.slice(index, 1);
        onChange(newData);
    }, [data, onChange])

    return <div>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {/*TODO: use uuid instead of index for key prop*/}
                {data.map((({x, y, width, height, actionType, color}, index) => <div
                    className={styles.actionFormBox}
                    style={{border: `2px solid ${color}`}}
                    key={`action-vector-form-${index}`}>
                    <div className={styles.actionTypeSelect}>
                        <FormControl className={styles.actionSelect}>
                            <InputLabel>Action Type</InputLabel>
                            <Select
                                value={actionType}
                                label="Action type"
                                name="actionType"
                                onChange={(e) => handleChange(e, index)}
                            >
                                {OBJECTS_ACTIONS_OPTIONS.map(({label, value}) => <MenuItem
                                    value={value}>{label}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <Button onClick={() => handleDeleteAction(index)} className={styles.deleteActionButton}
                                variant="contained" color="error">
                            Delete
                        </Button>
                    </div>
                    <div className={styles.inputRow}>
                        <TextField onChange={(e) => handleChange(e, index)} name="x" value={x} type="number"
                                   label={'X'} className={styles.input}/>
                        <TextField onChange={(e) => handleChange(e, index)} name="y" value={y} type="number"
                                   label={'Y'} className={styles.input}/>
                    </div>
                    <div className={styles.inputRow}>
                        <TextField onChange={(e) => handleChange(e, index)} label={'Width'} name="width" type="number"
                                   value={width}
                                   className={styles.input}/>
                        <TextField onChange={(e) => handleChange(e, index)} label={'Height'} name="height" type="number"
                                   value={height}
                                   className={styles.input}/>
                    </div>
                </div>))}

                <Button onClick={handleAddNewAction} sx={{marginTop: '20px'}} fullWidth variant="contained"
                        color="success">Add new action</Button>
            </AccordionDetails>
        </Accordion>
    </div>
}