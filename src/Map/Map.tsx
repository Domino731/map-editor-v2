import styles from './Map.module.scss';
import {create2DArray} from "../utils/array.ts";
import {useSelector} from "react-redux";
import {AppSelectors} from "../store/AppReducer.selectors.ts";

export const Map = () => {
    const mapData = useSelector(AppSelectors.mapTilesData);

    return <section className={styles.container}>
        <div className={styles.map}>
                    <div style={{width: `${40 * 16}px`, height: `${40 * 16}px`}}>
            {mapData.map((row, rowIndex) => <div className={styles.row} key={`map-row-${rowIndex}`}>
                {row.map((el, i) => <div className={styles.cell} key={`map-cell-${rowIndex}-${i}`}></div>)}
            </div>)}
        </div>
        </div>

    </section>
}