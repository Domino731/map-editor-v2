import {memo, useMemo} from "react";
import {create2DArray} from "../../utils/array.ts";
import {CELL_SIZE} from "../../const/app.ts";
import {MapTileData} from "../../store/AppReducer.types.ts";
import {TilesData} from "../../const/tiles/tiles.ts";

export const defaultCellDataFirst: MapTileData = {
    ...TilesData[33],
    x: 0,
    y: 7 * 16
}
export const defaultCellDataSecond: MapTileData = {
    ...TilesData[33],
    x: 16,
    y: 7 * 16
}

interface MapGridProps {
    size: number;
    isGridBorderVisible: boolean;
    isBlackBackground: boolean;
}

export const MapGrid = memo(({size, isGridBorderVisible, isBlackBackground}: MapGridProps) => {

    const mapData = useMemo(() => create2DArray(size, size, null), [size]);

    return <div>
        {mapData.map((mapCol, index) => <div key={`object-grid-col-${index}`}
                                             style={{display: 'flex'}}>
            {mapCol.map((_, mapRowIndex) => {
                const startIndex = index % 2 === 0 ? 0 : 1;
                const cellData = (mapRowIndex + startIndex) % 2 === 0 ? defaultCellDataFirst : defaultCellDataSecond;
                return <div
                    key={`object-grid-col-${mapRowIndex}`}
                    style={{
                        width: `${CELL_SIZE}px`,
                        height: `${CELL_SIZE}px`,
                        background: isBlackBackground ? 'black' : `url(${cellData.src}) ${cellData.x * -1}px ${cellData.y * -1}px`,
                        borderRight: isGridBorderVisible ? '1px solid grey' : 'none',
                        borderBottom: isGridBorderVisible ? '1px solid grey' : 'none',
                    }}
                >
                </div>
            })}
        </div>)}
    </div>
})