import {Input, Typography} from "@mui/material";
import styles from './SaveLoad.module.scss';
import Button from "@mui/material/Button";
import {ChangeEvent, useCallback} from "react";
import {MapJsonData} from "../../models/Map.ts";
import {defaultCellData} from "../../Map/Map.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {downloadJSON} from "../../utils/json.ts";
import {AppSliceActions} from "../../store/AppReducer.ts";

export const SaveLoad = () => {
    const dispatch = useDispatch();

    const actorsOnMap = useSelector(AppSelectors.actorsOnMap);
    const mapTiles = useSelector(AppSelectors.mapTiles)

    const handleDownloadMap = useCallback(() => {
        const data: MapJsonData = {
            defaultTile: {
                x: defaultCellData.x,
                y: defaultCellData.y,
                spriteId: defaultCellData.id
            },
            tiles: mapTiles,
            actors: actorsOnMap
        }
        downloadJSON(data, 'map')
    }, [actorsOnMap, mapTiles])

    const handleReadJson = (event: ChangeEvent) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const jsonObject = JSON.parse(e.target.result);
                    dispatch(AppSliceActions.loadMap(jsonObject))
                } catch (error) {
                    console.error("Invalid JSON:", error);
                    alert("Invalid JSON. Please correct it and try again.");
                }
            };
            reader.readAsText(file);
        } else {
            alert("Please select a file.");
        }
    };

    return <div>
        <div className={styles.box}>
            <Typography variant="h6" className={styles.title}>Load</Typography>
            <Input type="file" onChange={handleReadJson} className={styles.fileInput} placeholder="Upload a json file"
                   accept="application/JSON"/>
        </div>
        <div className={styles.box}>
            <Typography variant="h6" className={styles.title}>Save</Typography>
            <Button fullWidth variant="contained" onClick={handleDownloadMap}>Download json file</Button>
        </div>
    </div>
}