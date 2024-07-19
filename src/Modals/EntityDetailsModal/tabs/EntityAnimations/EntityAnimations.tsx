import {useCallback, useState} from "react";
import {EntityAnimationType, EntityAnimationTypeUnion} from "../../../../models/Entities.ts";
import {FormControl, InputLabel, List, ListItem, MenuItem, Select} from "@mui/material";
import {entityAnimationsOptions} from "./EntityAnimations.const.ts";
import {useDispatch, useSelector} from "react-redux";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {EntityAnimationView} from "../../components/EntityAnimationView";
import styles from './EntityAnimations.module.scss';
import {ScaleButtons} from "../../../ObjectDetailsModal/components/GridScale/GridScale.tsx";
import {entityDetailsModalSliceActions} from "../../store.ts";

export const EntityAnimations = () => {
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData);
    const animationsScale = useSelector(entityDetailsModalSelectors.animationsScale);

    const [animationType, setAnimationType] = useState<EntityAnimationTypeUnion>(EntityAnimationType.runDown)

    const handleChangeAnimationsScale = useCallback((isDecrease: boolean) => {
        const newScale = Number((animationsScale + (isDecrease ? -0.1 : 0.1)).toFixed(1));
        dispatch(entityDetailsModalSliceActions.setAnimationsScale(newScale))
    }, [animationsScale, dispatch])

    if (!entityData) return <></>

    return <div>
        <div className={styles.selectWrapper}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Animation type</InputLabel>
                <Select
                    value={animationType}
                    label="Animation type"
                    onChange={e => setAnimationType(e.target.value as EntityAnimationTypeUnion)}
                >
                    {entityAnimationsOptions.map(({label, animation}) => <MenuItem
                        value={animation}>{label}</MenuItem>)}
                </Select>
            </FormControl>
            <ScaleButtons onResetScale={() => dispatch(entityDetailsModalSliceActions.resetAnimationsScale())}
                          scale={animationsScale} onDecrease={() => handleChangeAnimationsScale(true)}
                          onIncrease={() => handleChangeAnimationsScale(false)}
            />
        </div>


        <List className={styles.list}>
            {entityData.animations[animationType].map((_, index) => <ListItem key={`entity-animation-${index}`}>
                <EntityAnimationView animationType={animationType} animationIndex={index}
                />
            </ListItem>)}
        </List>
    </div>
}