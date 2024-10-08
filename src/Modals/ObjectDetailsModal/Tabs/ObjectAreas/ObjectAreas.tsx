import styles from './ObjectAreas.module.scss';
import {Box, Typography} from "@mui/material";
import {MapGrid} from "../../../../components/MapGrid";
import {ObjectStageSelect} from "../../components/ObjectStageSelect";
import {ObjectAreasDebugSettings} from "../../components/ObjectAreasDebugSettings";
import {ObjectVectors} from "../../components/ObjectVectors";
import {GridScale} from "../../components/GridScale";
import {GroundArea, GroundCollision, ObjectActionCollisions, ZIndexLine} from "../../components/GridMapObjects";
import {MapObjectImage} from "../../components/GridMapObjects";
import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {useCallback} from "react";
import {objectDetailsModalSliceActions} from "../../store.ts";

const gridMapSize = 20;

export const ObjectAreas = () => {
    const dispatch = useDispatch();

    const {isBlackBackground, isGrid} = useSelector(objectDetailsModalSelectors.areasSettings)
    const gridScale = useSelector(objectDetailsModalSelectors.gridScale)
    const areasSettings = useSelector(objectDetailsModalSelectors.areasSettings);

    const handleChangeAreasSettings = useCallback((name: string, value: boolean) => {
        dispatch(objectDetailsModalSliceActions.setObjectAreasSettings({...areasSettings, [name]: value}))
    }, [areasSettings, dispatch])

    return <section className={styles.container}>

        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Settings</Typography>
            <div className={styles.settingsSection}>
                <ObjectStageSelect/>
            </div>

            <div className={styles.settingsSection}>
                <ObjectAreasDebugSettings onChange={handleChangeAreasSettings} areasSettings={areasSettings}/>
            </div>
        </section>

        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Areas</Typography>
            <ObjectVectors/>
        </section>

        {/*View section*/}
        <section className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>View</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.textureSectionWrapper}>
                    <div className={styles.textureSection}
                         style={{backgroundImage: isGrid ? undefined : 'none', transform: `scale(${gridScale})`}}>
                        <MapGrid isBlackBackground={isBlackBackground} size={gridMapSize} isGridBorderVisible={isGrid}/>
                        <MapObjectImage/>
                        <GroundArea/>
                        <ZIndexLine/>
                        <GroundCollision/>
                        <ObjectActionCollisions/>
                    </div>
                </div>
            </Box>
            <GridScale/>
        </section>

    </section>
}