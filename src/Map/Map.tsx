import styles from './Map.module.scss';
import {create2DArray} from "../utils/array.ts";
import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {useCallback, useMemo, useRef, useState} from "react";
import {MapTileData} from "../store/AppReducer.types.ts";
import {TilesData} from "../const/tiles.ts";
import {RightColumnTabs} from "../RightColumn/RightColumn.const.ts";
import {AllObjects} from "../const/allObjects.ts";
import {ObjectImage} from "../RightColumn/Objects/components/ObjectImage";
import bushImage from '../assets/map/objects/environment/bushes.png'
import {a} from "vite/dist/node/types.d-aGj9QkWt";

const defaultCellData: MapTileData = {
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

    const [objectCords, setObjectsCords] = useState<{ x: number; y: number }>({x: 0, y: 0});
    const [objectsOnMap, setObjectsOnMap] = useState<{ x: number; y: number; id: string }[]>([]);

    const object = useMemo(() => {
        if (rightColumnType !== RightColumnTabs.Objects || !objectId) return;
        return AllObjects.find(el => el.id === objectId);
    }, [objectId, rightColumnType])

    const onMapMouseOver = useCallback((event: MouseEvent) => {
        if (rightColumnType !== RightColumnTabs.Objects || !mapRef.current) return;
        const rect = mapRef.current.getBoundingClientRect();
        console.log(123);
        setObjectsCords({
            x: Math.floor((event.clientX - rect.left) / 16),
            y: Math.floor((event.clientY - rect.top) / 16)
        });
    }, [rightColumnType])

    const onMapClick = useCallback(() => {
        if (rightColumnType !== RightColumnTabs.Objects || !object) return;
        const {x, y} = objectCords;
        setObjectsOnMap(prev => [...prev, {x, y, id: object.id}])
    }, [object, objectCords, rightColumnType])

    const ObjectComponent = useCallback(() => <div
        style={{
            width: `${object?.specs.texture.width}px`,
            height: `${object?.specs.texture.height}px`,
            border: '1px solid red',
            position: 'absolute',
            zIndex: 100,
            top: 0,
            left: 0,
            transform: `translate(${(objectCords.x) * 16}px, ${(objectCords.y) * 16}px)`
        }}>
        <ObjectImage src={bushImage} x={object?.specs.texture.x ?? 0} y={object?.specs.texture.y ?? 0}
                     width={object?.specs.texture.width ?? 0} height={object?.specs.texture.height ?? 0}/>
    </div>, [object?.specs.texture.height, object?.specs.texture.width, object?.specs.texture.x, object?.specs.texture.y, objectCords.x, objectCords.y])

    return <section className={styles.container}>
        <div className={styles.map}>
            <div ref={mapRef} style={{width: `${40 * 16}px`, height: `${40 * 16}px`, position: 'relative'}}
                 onMouseOver={onMapMouseOver}
                 onClick={onMapClick}>
                <div style={{width: '100%', height: '100%'}}>
                    {mapData.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                        {row.map((_, i) => <MapCell cellX={i} cellY={rowIndex} key={`map-cell-${rowIndex}-${i}`}/>)}
                    </div>)}
                </div>
                <div style={{width: '100%', height: '100%', top: 0, left: 0, position: 'absolute', zIndex: 2}}>
                    {objectsOnMap.map(objectOnMap => {
                        const object = AllObjects.find(el => el.id === objectOnMap.id);
                        return <div
                            style={{
                                position: 'absolute',
                                top: `${objectOnMap.y * 16}px`,
                                left: `${objectOnMap.x * 16}px`
                            }}>
                            <ObjectImage src={bushImage} x={object?.specs.texture.x ?? 0}
                                         y={object?.specs.texture.y ?? 0}
                                         width={object?.specs.texture.width ?? 0}
                                         height={object?.specs.texture.height ?? 0}/>
                        </div>
                    })}
                </div>

                <ObjectComponent/>
            </div>
        </div>

    </section>
}