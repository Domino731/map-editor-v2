import styles from './Map.module.scss';
import {create2DArray} from "../utils/array.ts";
import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";
import {useMemo, useState} from "react";
import {MapTileData} from "../store/AppReducer.types.ts";
import {TilesData} from "../const/tiles.ts";

const defaultCellData: MapTileData = {
    ...TilesData[33],
    x: 0,
    y: 7 * 16
}

const MapCell = ({cellX, cellY}: { cellX: number; cellY: number }) => {
    const selectedTile = useSelector(AppSelectors.selectedTile);

    const [tile, setTile] = useState<MapTileData>(defaultCellData);

    const handleTileClick = () => {
        if (!selectedTile) return;
        console.log(selectedTile);
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
    const mapData = useSelector(AppSelectors.mapTilesData);

    return <section className={styles.container}>
        <div className={styles.map}>
            <div style={{width: `${40 * 16}px`, height: `${40 * 16}px`}}>
                {mapData.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                    {row.map((_, i) => <MapCell cellX={i} cellY={rowIndex} key={`map-cell-${rowIndex}-${i}`}/>)}
                </div>)}
            </div>
        </div>

    </section>
}