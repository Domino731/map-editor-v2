import styles from './Map.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {useCallback, useMemo, useRef, useState} from "react";
import {MapTileData} from "../store/AppReducer.types.ts";
import {TilesData} from "../const/tiles/tiles.ts";
import {RightColumnTabs} from "../RightColumn/MapContent.ts";
import {AllObjects} from "../const/objects/allObjects.ts";
import {ObjectImage} from "../components/ObjectImage";
import {generateUUID} from "../utils/string.ts";
import {ActorOnMap, MapTool} from "./Map.types.ts";
import {CELL_SIZE} from "../const/app.ts";
import {GameActorType} from "../models/game.ts";
import {MineObjectModel, TreeObjectModel} from "../models/GameObject.ts";
import {AllEntities} from "../const/characters/characters.ts";
import {AppSliceActions} from "../store/AppReducer.ts";
import {AnimalModel} from "../models/Entities.ts";
import {GameObjectTextureName} from "../models/textures.ts";

export const defaultCellData: MapTileData = {
    ...TilesData[33],
    x: 0,
    y: 7 * 16
}

const MapCell = ({cellX, cellY}: { cellX: number; cellY: number }) => {
    const selectedTile = useSelector(AppSelectors.selectedTile);
    const rightColumnType = useSelector(AppSelectors.rightColumnType);
    const mapTool = useSelector(AppSelectors.mapTool);
    const mapLayer = useSelector(AppSelectors.mapLayer);
    const mapLayers = useSelector(AppSelectors.mapLayers);

    const [isWall, setIsWall] = useState<boolean>(false);
    const [tilesData, setTilesData] = useState<Array<Required<MapTileData>>>([
        {...defaultCellData, zIndex: 0}
    ]);


    const handleTileClick = () => {
        if (rightColumnType === RightColumnTabs.Special) {
            if (mapTool === MapTool.Walls) {
                setIsWall(prev => !prev);
                return;
            }
        }


        if (!selectedTile || rightColumnType !== RightColumnTabs.Tiles) return;
        const index = tilesData.findIndex(({zIndex}) => zIndex === mapLayer);
        const newTilesData = [...tilesData];
        if (index !== -1) {
            newTilesData[index] = {...selectedTile, zIndex: mapLayer}
        } else {
            newTilesData.push({...selectedTile, zIndex: mapLayer})
        }
        setTilesData(newTilesData)
    }

    const cellStyles = useCallback((tile: MapTileData) => {
        return ({
            backgroundImage: `url(${tile.src})`,
            backgroundPosition: `${tile.x * -1}px ${tile.y * -1}px`
        })
    }, [])

    return <div className={styles.cell} onClick={handleTileClick}>
        {tilesData.map(el => {
            if (!mapLayers[el.zIndex].isVisible) return;
            return <div style={cellStyles(el)}></div>;
        })}
        {isWall && <span/>}
    </div>
}

export const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const mapData = useSelector(AppSelectors.mapTilesData);
    const rightColumnType = useSelector(AppSelectors.rightColumnType);
    const objectId = useSelector(AppSelectors.objectId);
    const objectStage = useSelector(AppSelectors.objectStage);
    const actorType = useSelector(AppSelectors.actorType);
    const mapTool = useSelector(AppSelectors.mapTool);
    const actorsOnMap = useSelector(AppSelectors.actorsOnMap);
    const treeHoveredObjectUuid = useSelector(AppSelectors.treeHoveredObjectUuid);

    const isTileMode = useMemo(() => {
        const isTile = actorType === GameActorType.Tile;
        const isTool = rightColumnType === RightColumnTabs.Special && mapTool
        return isTile || isTool;
    }, [actorType, mapTool, rightColumnType])

    const [objectCords, setObjectsCords] = useState<{ x: number; y: number }>({x: 0, y: 0});

    const selectedActorData = useMemo((): ActorOnMap | undefined => {
        if (isTileMode || !objectId) return;
        const actorOnMap: ActorOnMap = {
            x: 0,
            y: 0,
            id: objectId,
            actorType,
            uuid: generateUUID(),
            stage: objectStage,
            texture: {
                name: GameObjectTextureName.Wizard,
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            displayName: ''
        }

        if (actorType === GameActorType.Object) {
            const objectData: TreeObjectModel | MineObjectModel | undefined = AllObjects.find(el => el.id === objectId);
            if (!objectData) return;
            if (objectStage) {
                const stage = (objectData as TreeObjectModel).specs.stages[objectStage]
                actorOnMap.texture = stage.texture;
                actorOnMap.displayName = `${stage}, stage: ${objectStage}`;
            } else {
                actorOnMap.texture = (objectData as MineObjectModel).specs.texture;
                actorOnMap.displayName = (objectData as MineObjectModel).name;
            }

        } else if (actorType === GameActorType.Entity) {
            const entityData: AnimalModel | undefined = AllEntities.find(el => el.id === objectId);
            if (!entityData) return;
            actorOnMap.texture = {
                name: entityData.texture.name,
                x: entityData.presentationTextureCords.x,
                y: entityData.presentationTextureCords.y,
                height: entityData.texture.height,
                width: entityData.texture.width
            }
            actorOnMap.displayName = `${entityData.name}`
        }

        return actorOnMap;
    }, [actorType, isTileMode, objectId, objectStage])

    const onMapMouseOver = useCallback((event: MouseEvent) => {
        if (!mapRef.current) return;
        const rect = mapRef.current.getBoundingClientRect();
        setObjectsCords({
            x: Math.floor((event.clientX - rect.left) / 16),
            y: Math.floor((event.clientY - rect.top) / 16)
        });
    }, [])

    const onMapClick = useCallback(() => {
        if (mapTool === MapTool.DeleteEntity || mapTool === MapTool.DeleteObject) return;
        if (isTileMode) {
            const {x, y} = objectCords;
            console.log(x, y);
        }
        if (!selectedActorData || !objectId) return;
        const {x, y} = objectCords;
        const actorOnMap: ActorOnMap = {
            x,
            y,
            id: objectId,
            actorType,
            uuid: generateUUID(),
            stage: objectStage,
            texture: {
                name: GameObjectTextureName.Wizard,
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            displayName: selectedActorData.displayName
        }

        if (actorType === GameActorType.Object) {
            const objectData: TreeObjectModel | MineObjectModel | undefined = AllObjects.find(el => el.id === objectId);
            if (!objectData) return;
            if (objectStage) {
                actorOnMap.texture = (objectData as TreeObjectModel).specs.stages[objectStage].texture;
            } else {
                actorOnMap.texture = (objectData as MineObjectModel).specs.texture;
            }

        } else if (actorType === GameActorType.Entity) {
            const entityData = AllEntities.find(el => el.id === objectId);
            if (!entityData) return;
            actorOnMap.texture = {
                name: entityData.texture.name,
                x: entityData.presentationTextureCords.x,
                y: entityData.presentationTextureCords.y,
                height: entityData.texture.height,
                width: entityData.texture.width
            }
        } else {
            return;
        }
        dispatch(AppSliceActions.addActorOnMap(actorOnMap))
    }, [mapTool, isTileMode, selectedActorData, objectId, objectCords, actorType, objectStage, dispatch])

    const ObjectComponent = useCallback(() => {
        if (!selectedActorData) return;
        const {texture} = selectedActorData;
        return <div
            style={{
                width: `${texture.width}px`,
                height: `${texture.height}px`,
                border: '1px solid red',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                left: 0,
                transform: `translate(${(objectCords.x) * 16}px, ${(objectCords.y) * 16}px)`
            }}>
            <ObjectImage texture={texture}/>
        </div>
    }, [selectedActorData, objectCords])

    const handleClickOnMapObject = useCallback((uuid: string) => {
        if (rightColumnType === RightColumnTabs.Special) {
            if (mapTool === MapTool.DeleteObject || mapTool === MapTool.DeleteEntity) {
                dispatch(AppSliceActions.deleteActorOnMap(uuid));
            }
        }
    }, [dispatch, mapTool, rightColumnType])

    return <section className={styles.container}>
        <div className={styles.map}>
            <div
                style={{width: `${40 * 16}px`, height: `${40 * 16}px`, position: 'relative'}}
                onClick={onMapClick}>


                <div style={{width: '100%', height: '100%', position: 'relative', zIndex: 1}}>
                    {mapData.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                        {row.map((_, i) => <MapCell cellX={i} cellY={rowIndex} key={`map-cell-${rowIndex}-${i}`}/>)}
                    </div>)}
                </div>
                {/* All actors on map */}
                <div style={{top: 0, left: 0, position: 'absolute', zIndex: 2}}>
                    {actorsOnMap.map(({uuid, texture, x, y}) => {
                        return <div
                            onClick={() => handleClickOnMapObject(uuid)}
                            key={`map-objects-${uuid}`}
                            style={{
                                position: 'absolute',
                                top: `${y * CELL_SIZE}px`,
                                left: `${x * CELL_SIZE}px`
                            }}>
                            <ObjectImage texture={{
                                width: texture.width,
                                height: texture.height,
                                x: texture.x,
                                y: texture.y,
                                name: texture.name
                            }}
                                         isBorder={treeHoveredObjectUuid === uuid}
                            />
                        </div>
                    })}
                </div>


                {/*Selected object */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: isTileMode ? -1 : 3
                }}
                     ref={mapRef} onMouseMove={onMapMouseOver}
                >
                    <ObjectComponent/>
                </div>
            </div>
        </div>

    </section>
}