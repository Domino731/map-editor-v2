import {useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {RightColumnTabs} from "./RightColumn.const.ts";
import styles from './RightColumn.module.scss';
import {Tiles} from "./Tiles";
import {Objects} from "./Objects";

export const RightColumn = () => {
    const [tab, setTab] = useState<RightColumnTabs>(RightColumnTabs.Tiles);

    return <div>
        <Tabs value={tab} aria-label="right-column-tabs" className={styles.tabs} variant="fullWidth">
            <Tab label="Tiles" value={RightColumnTabs.Tiles} onClick={() => setTab(RightColumnTabs.Tiles)}/>
            <Tab label="Objects" value={RightColumnTabs.Objects} onClick={() => setTab(RightColumnTabs.Objects)}/>
            <Tab label="Entities" value={RightColumnTabs.Entities} onClick={() => setTab(RightColumnTabs.Entities)}/>
            <Tab label="Special" value={RightColumnTabs.Special} onClick={() => setTab(RightColumnTabs.Special)}/>
        </Tabs>
        {tab === RightColumnTabs.Tiles && <Tiles/>}
        {tab === RightColumnTabs.Objects && <Objects/>}
        {tab === RightColumnTabs.Entities && <>Entities</>}
        {tab === RightColumnTabs.Special && <>Special</>}
    </div>
}