import styles from './ObjectAreas.module.scss';
import {TreeModel} from "../../../../models/tree.ts";
import {useMemo, useState} from "react";
import {ObjectImage} from "../../../../RightColumn/Objects/components/ObjectImage";
import {Checkbox, FormControlLabel, FormGroup, IconButton, Typography, useTheme} from "@mui/material";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {CELL_SIZE} from "../../../../const/app.ts";
import {create2DArray} from "../../../../utils/array.ts";
import {defaultCellData} from "../../../../Map/Map.tsx";

interface ObjectAreasProps {
    objectData: TreeModel;
}

const initialGridScale = 1;
const gridSize = CELL_SIZE;
const gridRows = 20;
const gridCols = 20;

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

    const objectX = (gridRows * gridSize) / 2;
    const objectY = (gridCols * gridSize) / 2;
    return <div className={styles.container}>

        <div className={styles.section}>
            <div className={styles.settingsSection}>
                <Typography className={styles.title}>Object Stage</Typography>
                <ul className={styles.settingsSectionStageList}>
                    {objectData.specs.stages.map((_, index) => {
                        return <li
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
            2
        </div>

        <div className={styles.section}>
            <div className={styles.textureSectionWrapper} style={{
                background: isBlackBg ? 'black' : 'transparent'
            }}>
                <div className={styles.textureSection}
                     style={{backgroundImage: isGrid ? undefined : 'none', transform: `scale(${gridScale})`}}>

                    {/*Grass grid*/}
                    <div>
                        {mapData.map((mapCol, index) => <div key={`object-grid-col-${index}`} style={{display: 'flex'}}>
                            {mapCol.map((mapRow, mapRowIndex) => <div
                                key={`object-grid-col-${mapRowIndex}`}
                                style={{
                                    width: `${gridSize}px`,
                                    height: `${gridSize}px`,
                                    backgroundImage: `url(${defaultCellData.src})`,
                                    backgroundPosition: `${defaultCellData.x * -1}px ${defaultCellData.y * -1}px`,
                                    borderRight: isGrid ? '1px solid grey' : 'none',
                                    borderBottom: isGrid ? '1px solid grey' : 'none'
                                }}
                            >
                            </div>)}
                        </div>)}
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: `translate(${objectX - objectStageData.ground_place.texture_x_offset}px, ${objectY - objectStageData.ground_place.texture_y_offset}px)`,
                    }}>
                        <ObjectImage
                            x={objectStageData.x}
                            y={objectStageData.y}
                            width={objectStageData.width}
                            height={objectStageData.height}
                            type={objectData.type}
                            isBorder={isTextureBorder}
                        />
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: `${objectStageData.ground_place.width * gridSize}px`,
                        height: `${objectStageData.ground_place.height * gridSize}px`,
                        border: '1px solid red',
                        transform: `translate(${objectX}px, ${objectY}px)`,

                    }}>

                    </div>
                </div>
            </div>

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