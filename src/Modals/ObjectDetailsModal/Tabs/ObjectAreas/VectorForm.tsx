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
        onChange({...data, [name]: value})
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
                               label={(labels && labels.x) ? labels.x : 'X'} className={styles.input}/>
                    <TextField onChange={handleChange} name="y" value={data.y}
                               label={(labels && labels.y) ? labels.y : 'Y'} className={styles.input}/>
                </div>
                <div className={styles.inputRow}>
                    <TextField onChange={handleChange} label={(labels && labels.width) ? labels.width : 'Width'}
                               value={data.width}
                               className={styles.input}/>
                    <TextField onChange={handleChange} label={(labels && labels.height) ? labels.height : 'Height'}
                               value={data.height}
                               className={styles.input}/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
}