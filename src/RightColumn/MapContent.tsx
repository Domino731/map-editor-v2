import {useCallback, useMemo} from "react";
import {Tab, Tabs} from "@mui/material";
import {RightColumnTabs} from "./MapContent.ts";
import {Tiles} from "./Tiles";
import {Objects} from "./Objects";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../store/AppReducer.ts";
import {Entities} from "./Entities";
import {Special} from "./Special";

export const MapContent = () => {
    const dispatch = useDispatch();

    const rightColumnType = useSelector(AppSelectors.rightColumnType);

    const handleChangeRightColumnType = useCallback((v: RightColumnTabs) => {
        dispatch(AppSliceActions.setRightColumnType(v))
    }, [dispatch])

    const TabComponent = useMemo(() => {
        switch (rightColumnType) {
            case RightColumnTabs.Tiles:
                return <Tiles/>
            case RightColumnTabs.Objects:
                return <Objects/>
            case RightColumnTabs.Entities:
                return <Entities/>
            case RightColumnTabs.Special:
                return <Special/>
            default:
                return;
        }
    }, [rightColumnType])

    return <div>
        <Tabs value={rightColumnType} aria-label="right-column-tabs" sx={{marginBottom: "40px"}} variant="fullWidth">
            <Tab label="Tiles" value={RightColumnTabs.Tiles}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Tiles)}/>
            <Tab label="Objects" value={RightColumnTabs.Objects}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Objects)}/>
            <Tab label="Entities" value={RightColumnTabs.Entities}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Entities)}/>
            <Tab label="Special" value={RightColumnTabs.Special}
                 onClick={() => handleChangeRightColumnType(RightColumnTabs.Special)}/>
        </Tabs>
        {TabComponent}
    </div>
}