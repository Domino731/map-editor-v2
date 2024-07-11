import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import styles from './VectorForm.module.scss';
import {TextField} from "@mui/material";
import {Vector} from "../../../../types.ts";
import {ChangeEvent, useCallback} from "react";

export interface VectorFormProps {
    title: string;
    data: Vector;
    onChange: (v: Vector) => void;
}

export const VectorForm = ({title, data, onChange}: VectorFormProps) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        onChange({...data, [name]: value})
    }, [data, onChange])

    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.inputRow}>
                    <TextField onChange={handleChange} name="x" value={data.x} label="X" className={styles.input}/>
                    <TextField onChange={handleChange} name="y" value={data.y} label="Y" className={styles.input}/>
                </div>
                <div className={styles.inputRow}>
                    <TextField onChange={handleChange} name="width" value={data.width} label="Width"
                               className={styles.input}/>
                    <TextField onChange={handleChange} name="height" value={data.height} label="Height"
                               className={styles.input}/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
}