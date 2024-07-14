import styles from './ObjectAreas.module.scss';
import {ActionVector, TreeModel} from "../../../../models/tree.ts";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ObjectImage} from "../../../../RightColumn/Objects/components/ObjectImage";
import {Box, Checkbox, FormControlLabel, FormGroup, IconButton, Typography, useTheme} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {CELL_SIZE} from "../../../../const/app.ts";
import {ActionVectorForm, VectorForm} from "./VectorForm.tsx";
import {Vector} from "../../../../types.ts";
import {contrastColors} from "../../ObjectDetailsModel.const.ts";
import {MapGrid} from "../../../../components/MapGrid";
import {objectAreasColors} from "./ObjectAreas.const.ts";
import {ObjectStageSelect} from "../../components/ObjectStageSelect";
import {ObjectAreasDebugSettings} from "../../components/ObjectAreasDebugSettings";
import {ObjectVectors} from "../../components/ObjectVectors";
import {GridScale} from "../../components/GridScale";
import {GroundArea, GroundCollision, ObjectActionCollisions, ZIndexLine} from "../../components/GridMapObjects";
import {MapObjectImage} from "../../components/GridMapObjects/GridMapObjects.tsx";

interface ObjectAreasProps {
    objectData: TreeModel;
}

const initialGridScale = 3;
const gridSize = CELL_SIZE;
const gridRows = 20;
const gridCols = 20;
const gridMapSize = 20;

export const ObjectAreas = ({objectData}: ObjectAreasProps) => {
    const theme = useTheme();

    const [stage, setStage] = useState<number>(0);

    const [isTextureBorder, setIsTextureBorder] = useState<boolean>(false);
    const [isGrid, setIsGrid] = useState<boolean>(false);
    const [isGroundArea, setIsGroundArea] = useState<boolean>(false);
    const [isGroundCollision, setIsGroundCollision] = useState<boolean>(false);
    const [isActionCollisions, setIsActiveCollisons] = useState<boolean>(false);
    const [isBlackBg, setIsBlackBg] = useState<boolean>(false);
    const [gridScale, setGridScale] = useState<number>(initialGridScale);
    const [isZIndexLine, setIsZIndexLine] = useState<boolean>(false);
    const [treeTrunkOffset, setTreeTrunkOffset] = useState({x: 0, y: 0});
    const [textureVectors, setTextureVectors] = useState<Vector[]>([]);
    const [groundCollisionVectors, setGroundCollisionVectors] = useState<Vector[]>([]);
    const [actionCollisionVectors, setActionCollisionVectors] = useState<ActionVector[][]>([]);
    const [groundPlaceVectors, setGroundPlaceVectors] = useState<Vector[]>([]);
    const [zIndexLines, setZIndexLines] = useState<Vector[]>([]);

    useEffect(() => {
        const texturesVectors: Vector[] = [];
        const groundCollisionsVectorsData: Vector[] = [];
        const groundPlaceVectorsData: Vector[] = [];
        const actionCollisionVectorsData: ActionVector[][] = [];
        const zIndexLinesData: Vector[] = [];

        if (objectData.type === 'tree') {
            setTreeTrunkOffset({
                x: objectData.specs.trunk.offset_x,
                y: objectData.specs.trunk.offset_y
            })
        }


        objectData.specs.stages.forEach(el => {
            texturesVectors.push({
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height
            });
            groundCollisionsVectorsData.push({
                x: el.ground_collision.x,
                y: el.ground_collision.y,
                width: el.ground_collision.width,
                height: el.ground_collision.height
            });
            groundPlaceVectorsData.push({
                x: el.ground_place.texture_x_offset,
                y: el.ground_place.texture_y_offset,
                width: el.ground_place.width,
                height: el.ground_place.height
            });
            actionCollisionVectorsData.push(el.action_collisions.map((el, index) => ({
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
                actionType: el.action_type,
                color: contrastColors[index]
            })));
            zIndexLinesData.push({
                x: el.z_index.x,
                y: el.z_index.y,
                width: el.z_index.width,
                height: el.z_index.height
            })
        });
        setTextureVectors(texturesVectors);
        setGroundCollisionVectors(groundCollisionsVectorsData);
        setGroundPlaceVectors(groundPlaceVectorsData);
        setActionCollisionVectors(actionCollisionVectorsData);
        setZIndexLines(zIndexLinesData);
    }, [objectData])


    const handleChangeTextureVector = useCallback((data: Vector) => {
        const newTextureVectors = [...textureVectors];
        newTextureVectors[stage] = data;
        setTextureVectors(newTextureVectors);
    }, [stage, textureVectors]);

    const handleChangeGroundCollisonVector = useCallback((data: Vector) => {
        const newGroundCollisionVectors = [...groundCollisionVectors];
        newGroundCollisionVectors[stage] = data;
        setGroundCollisionVectors(newGroundCollisionVectors);
    }, [groundCollisionVectors, stage])

    const handleChangeGroundPlaceVector = useCallback((data: Vector) => {
        const newGroundPlaceVectors = [...groundPlaceVectors];
        newGroundPlaceVectors[stage] = data;
        setGroundPlaceVectors(newGroundPlaceVectors);
    }, [groundPlaceVectors, stage])

    const handleChangeActionCollisionVectors = useCallback((data: ActionVector[]) => {
        const newActionCollisionVectors = [...actionCollisionVectors];
        newActionCollisionVectors[stage] = data;
        setActionCollisionVectors(newActionCollisionVectors);
    }, [actionCollisionVectors, stage])

    const handleChangeZIndexLines = useCallback((data: Vector) => {
        const newZIndexLines = [...zIndexLines];
        newZIndexLines[stage] = data;
        setZIndexLines(newZIndexLines);
    }, [stage, zIndexLines])

    const objectX = useMemo(() => {
        return (gridRows * gridSize) / 2;
    }, []);

    const objectY = useMemo(() => {
        return (gridCols * gridSize) / 2;
    }, []);


    if (!groundPlaceVectors[stage]) return null;

    return <div className={styles.container}>

        <div className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Settings</Typography>
            <div className={styles.settingsSection}>
                <ObjectStageSelect/>
            </div>

            <div className={styles.settingsSection}>
                <ObjectAreasDebugSettings/>
            </div>
        </div>

        <div className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>Areas</Typography>
            <ObjectVectors/>
        </div>

        <div className={styles.section}>
            <Typography variant="h6" sx={{borderBottom: '1px solid grey', marginBottom: '24px'}}>View</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.textureSectionWrapper} style={{
                    background: isBlackBg ? 'black' : 'transparent'
                }}>
                    <div className={styles.textureSection}
                         style={{backgroundImage: isGrid ? undefined : 'none', transform: `scale(${gridScale})`}}>
                        <MapGrid isBlackBackground={isBlackBg} size={gridMapSize} isGridBorderVisible={isGrid}/>
                        <MapObjectImage/>
                        <GroundArea/>
                        <ZIndexLine/>
                        <GroundCollision/>
                        <ObjectActionCollisions/>
                    </div>
                </div>
            </Box>


            <GridScale/>

        </div>

    </div>
}