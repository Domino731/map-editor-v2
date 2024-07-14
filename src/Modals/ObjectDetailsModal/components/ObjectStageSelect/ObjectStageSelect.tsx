import {Typography, useTheme} from "@mui/material";
import styles from './ObjectStageSelect.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";

export const ObjectStageSelect = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const objectStage = useSelector(objectDetailsModalSelectors.objectStage);
    const objectData = useSelector(objectDetailsModalSelectors.objectData);

    if (!objectData) return <>Loading...</>

    return <div>
        <Typography variant="h6">
            Object's stage
        </Typography>
        <ul className={styles.list}>
            {objectData.specs.stages.map((_, index) => <li
                className={styles.listItem}
                style={{border: objectStage === index ? `1px solid ${theme.palette.primary.main}` : `1px  solid grey`}}
                onClick={() => {
                    dispatch(objectDetailsModalSliceActions.setObjectStage(index))
                }}>{index + 1}
            </li>)}
        </ul>
    </div>
}