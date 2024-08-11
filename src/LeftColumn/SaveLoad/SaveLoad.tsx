import {Input, Typography} from "@mui/material";
import styles from './SaveLoad.module.scss';
import Button from "@mui/material/Button";
import {useCallback} from "react";
import {MapJsonData} from "../../models/Map.ts";
import {defaultCellData} from "../../Map/Map.tsx";
import {useSelector} from "react-redux";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";

export const SaveLoad = () => {
    const actorsOnMap = useSelector(AppSelectors.actorsOnMap);

    const handleDownloadMap = useCallback(() => {
        const data: MapJsonData = {
            defaultTile: {
                x: defaultCellData.x,
                y: defaultCellData.y,
                spriteId: defaultCellData.id
            },
            tiles: [],
            actors: actorsOnMap.map(el => ({
                x: el.x,
                y: el.y,
                id: el.id,
                actorType: el.actorType,
                stage: el.stage
            }))
        }
    }, [actorsOnMap])

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