import {defaultCellData} from "../../Map/Map.tsx";
import {memo, useMemo} from "react";
import {create2DArray} from "../../utils/array.ts";
import {CELL_SIZE} from "../../const/app.ts";

interface MapGridProps {
    size: number;
    isGridBorderVisible: boolean;
}

export const MapGrid = memo(({size, isGridBorderVisible}: MapGridProps) => {

    const mapData = useMemo(() => create2DArray(size, size, null), [size]);

    return <div>
        {mapData.map((mapCol, index) => <div key={`object-grid-col-${index}`}
                                             style={{display: 'flex'}}>
            {mapCol.map((_, mapRowIndex) => <div
                key={`object-grid-col-${mapRowIndex}`}
                style={{
                    width: `${CELL_SIZE}px`,
                    height: `${CELL_SIZE}px`,
                    backgroundImage: `url(${defaultCellData.src})`,
                    backgroundPosition: `${defaultCellData.x * -1}px ${defaultCellData.y * -1}px`,
                    borderRight: isGridBorderVisible ? '1px solid grey' : 'none',
                    borderBottom: isGridBorderVisible ? '1px solid grey' : 'none'
                }}
            >
            </div>)}
        </div>)}
    </div>
})