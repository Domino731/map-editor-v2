import {useMemo, useState} from "react";
import {TilesData} from "../../const/tiles.ts";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import styles from './Tiles.module.scss';
import {create2DArray} from "../../utils/array.ts";

export const Tiles = () => {
    const [tilesId, setTilesId] = useState<number>(TilesData[0].id);

    const tilesData = useMemo(() => TilesData.find(({id}) => id === tilesId) ?? TilesData[0], [tilesId])
    
    const cellsArray = useMemo(() => create2DArray(tilesData.height / 16, tilesData.width / 16, null ), [tilesData])

    return <div>
        <FormControl fullWidth>
  <InputLabel>Age</InputLabel>
  <Select
    id="tile-select"
    value={tilesId}
    label="Tiles"
    onChange={(e) => setTilesId(Number(e.target.value))}
  >
      {TilesData.map(({id, label}) => <MenuItem value={id} key={`tiles-select-${id}`}>{label}</MenuItem>)}
  </Select>
</FormControl>

        <div className={styles.tiles}>
            <img src={tilesData.src} className={styles.tilesBackground}/>
                        {cellsArray.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                {row.map((_, i) => <div className={styles.cell} key={`map-cell-${rowIndex}-${i}`}></div>)}
            </div>)}
        </div>
    </div>
}