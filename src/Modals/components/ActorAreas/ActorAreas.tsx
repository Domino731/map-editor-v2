import {Box, Typography} from "@mui/material";
import {ObjectStageSelect} from "../../ObjectDetailsModal/components/ObjectStageSelect";
import {ObjectAreasDebugSettings} from "../../ObjectDetailsModal/components/ObjectAreasDebugSettings";
import {MapGrid} from "../../../components/MapGrid";
import {GridScale} from "../../ObjectDetailsModal/components/GridScale";
import styles from './ActorAreas.module.scss';
import {ObjectAreasSettings} from "../../ObjectDetailsModal/store.types.ts";
import {ReactNode} from "react";


const gridMapSize = 20;


interface ActorAreasProps {
    isObjectStageSelectVisible: boolean;
    areasSettings: ObjectAreasSettings;
    onSettingsChange: (name: string, value: boolean) => void;
    actorAreasComponent: ReactNode;
    actorPreviewComponent: ReactNode;
    isHitBoxVisible?: boolean;
}

export const ActorAreas = ({
                               isObjectStageSelectVisible,
                               areasSettings,
                               onSettingsChange,
                               actorAreasComponent,
                               actorPreviewComponent,
                               isHitBoxVisible
                           }: ActorAreasProps) => {
    const {isBlackBackground, isGrid, gridScale} = areasSettings;

    return <section className={styles.container}>

        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Settings</Typography>
            {isObjectStageSelectVisible && <div className={styles.settingsSection}>
                <ObjectStageSelect/>
            </div>}

            <div className={styles.settingsSection}>
                <ObjectAreasDebugSettings isHitBoxVisible={isHitBoxVisible} areasSettings={areasSettings}
                                          onChange={onSettingsChange}/>
            </div>
        </section>

        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Areas</Typography>
            {actorAreasComponent}
        </section>

        {/*View section*/}
        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>View</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.textureSectionWrapper}>
                    <div className={styles.textureSection}
                         style={{backgroundImage: isGrid ? undefined : 'none', transform: `scale(${gridScale})`}}>
                        <MapGrid isBlackBackground={isBlackBackground} size={gridMapSize} isGridBorderVisible={isGrid}/>
                        {actorPreviewComponent}
                    </div>
                </div>
            </Box>
            <GridScale/>
        </section>

    </section>
}