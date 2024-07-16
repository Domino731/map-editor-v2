import {useCallback} from "react";
import {Tab, Tabs} from "@mui/material";
import {RightColumnTabs} from "./RightColumn.const.ts";
import styles from './RightColumn.module.scss';
import {Tiles} from "./Tiles";
import {Objects} from "./Objects";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../store/AppReducer.ts";
import {Entities} from "./Entities";
import {Special} from "./Special";

export const RightColumn = () => {
    const dispatch = useDispatch();

    const rightColumnType = useSelector(AppSelectors.rightColumnType);

    const handleChangeRightColumnType = useCallback((v: RightColumnTabs) => {
        dispatch(AppSliceActions.setRightColumnType(v))
    }, [dispatch])

    return <div>
        <Tabs value={rightColumnType} aria-label="right-column-tabs" className={styles.tabs} variant="fullWidth">
            <Tab label="Tiles" value={RightColumnTabs.Tiles}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Tiles)}/>
            <Tab label="Objects" value={RightColumnTabs.Objects}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Objects)}/>
            <Tab label="Entities" value={RightColumnTabs.Entities}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Entities)}/>
            <Tab label="Special" value={RightColumnTabs.Special}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Special)}/>
        </Tabs>
        {rightColumnType === RightColumnTabs.Tiles && <Tiles/>}
        {rightColumnType === RightColumnTabs.Objects && <Objects/>}
        {rightColumnType === RightColumnTabs.Entities && <Entities/>}
        {rightColumnType === RightColumnTabs.Special && <Special/>}
    </div>
}