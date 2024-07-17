import styles from './Special.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {useCallback} from "react";
import {MapTool, MapToolUnion} from "../../Map/Map.types.ts";
import {AppSliceActions} from "../../store/AppReducer.ts";
import {useTheme} from "@mui/material";

export const Special = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const mapTool = useSelector(AppSelectors.mapTool);

    const handleChangeMapTool = useCallback((mapTool: MapToolUnion) => {
        dispatch(AppSliceActions.setMapTool(mapTool));
    }, [dispatch])

    return <div>
        <ul className={styles.list}>
            <li className={styles.listItem} onClick={() => handleChangeMapTool(MapTool.Walls)}>
                <span className={styles.blockWall}/>
                <p style={{color: mapTool === MapTool.Walls ? theme.palette.primary.main : 'white'}}>Add block walls</p>
            </li>
            <li className={styles.listItem} onClick={() => handleChangeMapTool(MapTool.DeleteObject)}>
                <span className={styles.blockWall}/>
                <p style={{color: mapTool === MapTool.DeleteObject ? theme.palette.primary.main : 'white'}}>Delete an
                    object</p>
            </li>
            <li className={styles.listItem} onClick={() => handleChangeMapTool(MapTool.DeleteEntity)}>
                <span className={styles.blockWall}/>
                <p style={{color: mapTool === MapTool.DeleteEntity ? theme.palette.primary.main : 'white'}}>Delete an
                    entity</p>
            </li>
        </ul>
    </div>
}