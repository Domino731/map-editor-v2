import {Input, Typography} from "@mui/material";
import styles from './SaveLoad.module.scss';
import Button from "@mui/material/Button";

export const SaveLoad = () => {
    return <div>
        <div className={styles.box}>
            <Typography variant="h6" className={styles.title}>Load</Typography>
            <Input type="file" className={styles.fileInput} placeholder="Upload a json file"/>
        </div>
        <div className={styles.box}>
            <Typography variant="h6" className={styles.title}>Save</Typography>
            <Button fullWidth variant="contained">Download json file</Button>
        </div>
    </div>
}