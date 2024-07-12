import styles from './ObjectAreas.module.scss';
import {ActionVector, TreeModel} from "../../../../models/tree.ts";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ObjectImage} from "../../../../RightColumn/Objects/components/ObjectImage";
import {Box, Checkbox, FormControlLabel, FormGroup, IconButton, Typography, useTheme} from "@mui/material";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {CELL_SIZE} from "../../../../const/app.ts";
import {create2DArray} from "../../../../utils/array.ts";
import {defaultCellData} from "../../../../Map/Map.tsx";
import {ActionVectorForm, VectorForm} from "./VectorForm.tsx";
import {Vector} from "../../../../types.ts";
import {contrastColors} from "../../ObjectDetailsModel.const.ts";
import {MapGrid} from "../../../../components/MapGrid";

interface ObjectAreasProps {
    objectData: TreeModel;
}

const initialGridScale = 1;
const gridSize = CELL_SIZE;
const gridRows = 20;
const gridCols = 20;
const gridMapSize = 20;
const mapData = create2DArray(gridRows, gridCols, null);

export const ObjectAreas = ({objectData}: ObjectAreasProps) => {
    const theme = useTheme();

    const [stage, setStage] = useState<number>(0);

    const [isTextureBorder, setIsTextureBorder] = useState<boolean>(true);
    const [isGrid, setIsGrid] = useState<boolean>(true);
    const [isGroundArea, setIsGroundArea] = useState<boolean>(true);
    const [isActionCollisions, setIsActiveCollisons] = useState<boolean>(true);
    const [isBlackBg, setIsBlackBg] = useState<boolean>(false);
    const [gridScale, setGridScale] = useState<number>(initialGridScale);

    const objectStageData = useMemo(() => objectData.specs.stages[stage], [objectData.specs.stages, stage]);

    const [textureVectors, setTextureVectors] = useState<Vector[]>([]);
    const [groundCollisionVectors, setGroundCollisionVectors] = useState<Vector[]>([]);
    const [actionCollisionVectors, setActionCollisionVectors] = useState<ActionVector[][]>([]);
    const [groundPlaceVectors, setGroundPlaceVectors] = useState<Vector[]>([]);

    useEffect(() => {
        const texturesVectors: Vector[] = [];
        const groundCollisionsVectorsData: Vector[] = [];
        const groundPlaceVectorsData: Vector[] = [];
        const actionCollisionVectorsData: ActionVector[][] = [];

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
        });
        setTextureVectors(texturesVectors);
        setGroundCollisionVectors(groundCollisionsVectorsData);
        setGroundPlaceVectors(groundPlaceVectorsData);
        setActionCollisionVectors(actionCollisionVectorsData);
    }, [objectData.specs.stages])


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

    const objectX = useMemo(() => {
        return (gridRows * gridSize) / 2;
    }, []);

    const objectY = useMemo(() => {
        return (gridCols * gridSize) / 2;
    }, []);

    return <div className={styles.container}>

        <div className={styles.section}>
            <div className={styles.settingsSection}>
                <Typography className={styles.title}>Object Stage</Typography>
                <ul className={styles.settingsSectionStageList}>
                    {objectData.specs.stages.map((_, index) => {
                        return <li
                            key={`object-stages-list-${index}`}
                            className={styles.settingsSectionStageListItem}
                            onClick={() => setStage(index)}
                            style={{border: `${stage === index ? 2 : 1}px solid ${stage === index ? theme.palette.primary.main : 'grey'}`}}
                        >
                            {index + 1}
                        </li>
                    })}
                </ul>
            </div>

            <div className={styles.settingsSection}>
                <Typography className={styles.title}>Debug Settings</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={isTextureBorder}
                                                         onClick={() => setIsTextureBorder(prev => !prev)}/>}
                                      label="Show texture red border"/>
                    <FormControlLabel
                        control={<Checkbox checked={isBlackBg} onClick={() => setIsBlackBg(prev => !prev)}/>}
                        label="Show black background"/>
                    <FormControlLabel control={<Checkbox checked={isGrid} onClick={() => setIsGrid(prev => !prev)}/>}
                                      label="Show grid"/>
                    <FormControlLabel
                        control={<Checkbox checked={isGroundArea} onClick={() => setIsGroundArea(prev => !prev)}/>}
                        label="Show ground area"/>
                    <FormControlLabel
                        control={<Checkbox checked={isActionCollisions}
                                           onClick={() => setIsActiveCollisons(prev => !prev)}/>}
                        label="Show actions collisions"/>
                </FormGroup>
            </div>
        </div>

        <div className={styles.section}>
            {textureVectors[stage] &&
                <VectorForm title="Texture" data={textureVectors[stage]} onChange={handleChangeTextureVector}/>}
            {groundCollisionVectors[stage] &&
                <VectorForm title="Ground collision" data={groundCollisionVectors[stage]}
                            onChange={handleChangeGroundCollisonVector}/>}
            {groundPlaceVectors[stage] &&
                <VectorForm title="Ground place" data={groundPlaceVectors[stage]}
                            onChange={handleChangeGroundPlaceVector} labels={{
                    x: "Texture x offset",
                    y: "Texture y offset"
                }}/>}
            {actionCollisionVectors[stage] && <ActionVectorForm
                title="Actions"
                data={actionCollisionVectors[stage]}
                onChange={handleChangeActionCollisionVectors}
            />}
        </div>

        <div className={styles.section}>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.textureSectionWrapper} style={{
                    background: isBlackBg ? 'black' : 'transparent'
                }}>
                    <div className={styles.textureSection}
                         style={{backgroundImage: isGrid ? undefined : 'none', transform: `scale(${gridScale})`}}>

                        {/*Grass grid*/}
                        <MapGrid isBlackBackground={isBlackBg} size={gridMapSize} isGridBorderVisible={isGrid}/>


                        {/*Object image*/}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            transform: `translate(${objectX - groundPlaceVectors[stage]?.x ?? 0}px, ${objectY - groundPlaceVectors[stage]?.y ?? 0}px)`,
                        }}>
                            {textureVectors[stage] && <ObjectImage
                                x={textureVectors[stage].x}
                                y={textureVectors[stage].y}
                                width={textureVectors[stage].width}
                                height={textureVectors[stage].height}
                                type={objectData.type}
                                isBorder={isTextureBorder}
                            />}
                        </div>

                        {/* GROUND AREA */}
                        {(groundPlaceVectors[stage] && isGroundArea) && <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${groundPlaceVectors[stage].width * gridSize}px`,
                            height: `${groundPlaceVectors[stage].height * gridSize}px`,
                            border: '1px solid red',
                            transform: `translate(${objectX}px, ${objectY}px)`,
                        }}/>}

                        {groundCollisionVectors[stage] && <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: `${groundCollisionVectors[stage].width}px`,
                            height: `${groundCollisionVectors[stage].height}px`,
                            border: '1px solid purple',
                            transform: `translate(${objectX + groundCollisionVectors[stage].x}px, ${objectY + groundCollisionVectors[stage].y}px)`,
                        }}/>}


                        {actionCollisionVectors[stage] && <>
                            {actionCollisionVectors[stage].map(({x, y, width, height, color}, index) => <div
                                // TODO: use uuid instead of index
                                key={`object-action-collision-${index}`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: `${width}px`,
                                    height: `${height}px`,
                                    border: `1px dotted ${color}`,
                                    transform: `translate(${objectX + x}px, ${objectY + y}px)`,
                                }}/>)}
                        </>}
                    </div>
                </div>
            </Box>


            <div className={styles.scaleSection}>
                <div>
                    <IconButton onClick={() => setGridScale(prev => Number((prev - 0.1).toFixed(1)))}>
                        <RemoveIcon/>
                    </IconButton>
                    <Typography className={styles.scaleSectionText}>
                        {gridScale}
                    </Typography>

                    <IconButton onClick={() => setGridScale(prev => Number((prev + 0.1).toFixed(1)))}>
                        <AddIcon/>
                    </IconButton>
                </div>
                <button onClick={() => setGridScale(initialGridScale)}>Reset scale</button>
            </div>

        </div>

    </div>
}