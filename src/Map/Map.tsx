import styles from './Map.module.scss';
import {create2DArray} from "../utils/array.ts";
import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {useCallback, useMemo, useRef, useState} from "react";
import {MapTileData} from "../store/AppReducer.types.ts";
import {TilesData} from "../const/tiles/tiles.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";
import {AllObjects} from "../const/objects/allObjects.ts";
import {ObjectImage} from "../components/ObjectImage";
import {generateUUID} from "../utils/string.ts";

export const defaultCellData: MapTileData = {
    ...TilesData[33],
    x: 0,
    y: 7 * 16
}

const MapCell = ({cellX, cellY}: { cellX: number; cellY: number }) => {
    const selectedTile = useSelector(AppSelectors.selectedTile);
    const rightColumnType = useSelector(AppSelectors.rightColumnType);

    const [tile, setTile] = useState<MapTileData>(defaultCellData);

    const handleTileClick = () => {
        if (!selectedTile || rightColumnType !== RightColumnTabs.Tiles) return;
        setTile(selectedTile);
    }

    const cellStyles = useMemo(() => {
        return ({
            backgroundImage: `url(${tile.src})`,
            backgroundPosition: `${tile.x * -1}px ${tile.y * -1}px`
        })
    }, [tile.src, tile.x, tile.y])

    return <div className={styles.cell} style={cellStyles} onClick={handleTileClick}></div>
}

export const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    const mapData = useSelector(AppSelectors.mapTilesData);
    const rightColumnType = useSelector(AppSelectors.rightColumnType);
    const objectId = useSelector(AppSelectors.objectId);
    const objectStage = useSelector(AppSelectors.objectStage);

    const [objectCords, setObjectsCords] = useState<{ x: number; y: number }>({x: 0, y: 0});
    const [objectsOnMap, setObjectsOnMap] = useState<{
        x: number;
        y: number;
        id: string,
        stage: number | null;
        uuid: string
    }[]>([]);

    const object = useMemo(() => {
        if (rightColumnType !== RightColumnTabs.Objects || !objectId) return;
        return AllObjects.find(el => el.id === objectId);
    }, [objectId, rightColumnType])


    const onMapMouseOver = useCallback((event: MouseEvent) => {
        if (rightColumnType !== RightColumnTabs.Objects || !mapRef.current) return;
        const rect = mapRef.current.getBoundingClientRect();
        setObjectsCords({
            x: Math.floor((event.clientX - rect.left) / 16),
            y: Math.floor((event.clientY - rect.top) / 16)
        });
    }, [rightColumnType])

    const onMapClick = useCallback(() => {
        if (rightColumnType !== RightColumnTabs.Objects || !object) return;
        const {x, y} = objectCords;
        setObjectsOnMap(prev => [...prev, {x, y, id: object.id, stage: objectStage, uuid: generateUUID()}])
    }, [object, objectCords, objectStage, rightColumnType])

    const ObjectComponent = useCallback(() => {
        let width = object?.specs?.texture?.width;
        let height = object?.specs?.texture?.height;
        let x = object?.specs?.texture?.x;
        let y = object?.specs?.texture?.y;
        let name = object?.specs?.texture?.name;
        if (objectStage !== null) {
            const stage = object?.specs.stages[objectStage]?.texture;
            width = stage.width;
            height = stage.height;
            x = stage.x;
            y = stage.y;
            name = stage.name
        }

        return <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                border: '1px solid red',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                left: 0,
                transform: `translate(${(objectCords.x) * 16}px, ${(objectCords.y) * 16}px)`
            }}>
            <ObjectImage texture={{
                width,
                height,
                x,
                y,
                name
            }}/>
        </div>
    }, [object, objectCords, objectStage])

    return <section className={styles.container}>
        <div className={styles.map}>
            <div style={{width: `${40 * 16}px`, height: `${40 * 16}px`, position: 'relative'}}
                 onClick={onMapClick}>
                <div style={{width: '100%', height: '100%', position: 'relative', zIndex: 1}}>
                    {mapData.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                        {row.map((_, i) => <MapCell cellX={i} cellY={rowIndex} key={`map-cell-${rowIndex}-${i}`}/>)}
                    </div>)}
                </div>

                <div style={{top: 0, left: 0, position: 'absolute', zIndex: 2}}>
                    {objectsOnMap.map(objectOnMap => {
                        const object = AllObjects.find(el => el.id === objectOnMap.id);
                        let width = object?.specs?.texture?.width;
                        let height = object?.specs?.texture?.height;
                        let x = object?.specs?.texture?.x;
                        let y = object?.specs?.texture?.y;
                        let name = object?.specs?.texture?.name;
                        if (objectOnMap.stage !== null) {
                            const stage = object?.specs.stages[objectStage]?.texture;
                            width = stage.width;
                            height = stage.height;
                            x = stage.x;
                            y = stage.y;
                            name = stage.name;
                        }

                        return <div
                            key={`map-objects-${objectOnMap.uuid}`}
                            style={{
                                position: 'absolute',
                                top: `${objectOnMap.y * 16}px`,
                                left: `${objectOnMap.x * 16}px`
                            }}>
                            <ObjectImage texture={{
                                width, height, x, y, name
                            }}/>
                        </div>
                    })}
                </div>

                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: rightColumnType === RightColumnTabs.Objects ? 3 : -1
                }}
                     ref={mapRef}
                     onMouseMove={onMapMouseOver}
                >
                    <ObjectComponent/>
                </div>
            </div>
        </div>

    </section>
}