import styles from './GridScale.module.scss';
import {IconButton, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {objectDetailsModalSliceActions} from "../../store.ts";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";

interface ScaleButtonsProps {
    onDecrease: () => void;
    onIncrease: () => void;
    scale: number;
    onResetScale: () => void;
}

export const ScaleButtons = ({onDecrease, onIncrease, onResetScale, scale}: ScaleButtonsProps) => {
    return <div className={styles.scaleSection}>
        <div className={styles.scaleButtons}>
            <IconButton onClick={onDecrease}>
                <RemoveIcon/>
            </IconButton>
            <Typography className={styles.scaleSectionText}>
                {scale}
            </Typography>

            <IconButton onClick={onIncrease}>
                <AddIcon/>
            </IconButton>
        </div>
        <button onClick={onResetScale}>Reset scale
        </button>
    </div>
}


export const GridScale = () => {
    const dispatch = useDispatch();

    const gridScale = useSelector(objectDetailsModalSelectors.gridScale);

    const handleChangeGridScale = useCallback((gridScale: number) => {
        dispatch(objectDetailsModalSliceActions.setGridScale(gridScale))
    }, [dispatch])

    return <div className={styles.scaleSection}>
        <div>
            <IconButton onClick={() => handleChangeGridScale(Number((gridScale - 0.1).toFixed(1)))}>
                <RemoveIcon/>
            </IconButton>
            <Typography className={styles.scaleSectionText}>
                {gridScale}
            </Typography>

            <IconButton onClick={() => handleChangeGridScale(Number((gridScale + 0.1).toFixed(1)))}>
                <AddIcon/>
            </IconButton>
        </div>
        <button onClick={() => handleChangeGridScale(0)}>Reset scale</button>
    </div>
}