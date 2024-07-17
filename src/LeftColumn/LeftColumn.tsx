import {useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {LeftColumnTab, LeftColumnTabUnion} from "./LeftColumn.types.ts";
import {Settings} from "./Settings";
import {SaveLoad} from "./SaveLoad";
import {Tree} from "./Tree";

export const LeftColumn = () => {
    const [tab, setTab] = useState<LeftColumnTabUnion>(LeftColumnTab.Tree);

    return <div>
        <Tabs value={tab} aria-label="right-column-tabs" sx={{marginBottom: "40px"}} variant="fullWidth">
            <Tab label="Tree" value={LeftColumnTab.Tree}
                 onClick={() => setTab(LeftColumnTab.Tree)}/>
            <Tab label="Settings" value={LeftColumnTab.Settings}
                 onClick={() => setTab(LeftColumnTab.Settings)}/>
            <Tab label="Save & Load" value={LeftColumnTab.SaveLoad}
                 onClick={() => setTab(LeftColumnTab.SaveLoad)}/>
        </Tabs>

        {tab === LeftColumnTab.Tree && <Tree/>}
        {tab === LeftColumnTab.Settings && <Settings/>}
        {tab === LeftColumnTab.SaveLoad && <SaveLoad/>}
    </div>
}