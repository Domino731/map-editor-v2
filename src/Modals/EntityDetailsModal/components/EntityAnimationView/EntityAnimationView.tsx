import styles from './EntityAnimationView.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {EntityAnimationTypeUnion} from "../../../../models/Entities.ts";
import {ObjectImage} from "../../../../components/ObjectImage";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {TextField, useTheme} from "@mui/material";
import {useCallback} from "react";
import {entityDetailsModalSliceActions} from "../../store.ts";

export interface EntityAnimationViewProps {
    animationIndex: number;
    animationType: EntityAnimationTypeUnion
}

export const EntityAnimationView = ({animationIndex, animationType}: EntityAnimationViewProps) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData)
    const animationData = useSelector(entityDetailsModalSelectors.entityData)?.animations[animationType] ?? []
    const animationX = animationData[animationIndex][0];
    const animationY = animationData[animationIndex][1];

    const handleChangeEntityAnimation = useCallback((animationData: number[]) => {
        dispatch(entityDetailsModalSliceActions.setEntityAnimation({
            animationData,
            animationType,
            animationIndex
        }))
    }, [animationIndex, animationType, dispatch])

    if (!entityData) return;
    return <div className={styles.container}>
        <span className={styles.index} style={{background: theme.palette.primary.main}}>{animationIndex + 1}</span>
        <div className={styles.objectImageWrapper}>
            <ObjectImage texture={{
                x: animationX,
                y: animationY,
                width: entityData.texture.width,
                height: entityData.texture.height,
                name: entityData.texture.name
            }}
            />
        </div>

        <div className={styles.inputsRow}>
            <TextField type='number' label="X" value={animationX} onChange={({target: {value}}) => {
                handleChangeEntityAnimation([Number(value), animationY])
            }}/>
            <TextField type='number' label="Y" value={animationY} onChange={({target: {value}}) => {
                handleChangeEntityAnimation([animationX, Number(value)])
            }}/>
        </div>
    </div>
}