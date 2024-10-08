import {Typography, useTheme} from "@mui/material";
import styles from './ObjectStageSelect.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";
import {GameMultiStageObjectUnion} from "../../../../models/GameObject.ts";

export const ObjectStageSelect = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const objectStage = useSelector(objectDetailsModalSelectors.objectStage);
    const objectData = useSelector(objectDetailsModalSelectors.objectData);

    if (!objectData) return <>Loading...</>
    const multiStageObject = objectData as unknown as GameMultiStageObjectUnion
    console.log('multiStageObject.specs?.stages" ', objectStage)
    if (!multiStageObject.specs?.stages) return null;

    return <div>
        <Typography variant="h6">
            Object's stage
        </Typography>
        <ul className={styles.list}>
            {multiStageObject.specs.stages.map((_, index) => <li
                className={styles.listItem}
                style={{border: objectStage === index ? `1px solid ${theme.palette.primary.main}` : `1px  solid grey`}}
                onClick={() => {
                    dispatch(objectDetailsModalSliceActions.setObjectStage(index))
                }}>{index + 1}
            </li>)}
        </ul>
    </div>
}