import {useState} from "react";
import {EntityAnimationType, EntityAnimationTypeUnion} from "../../../../models/Entities.ts";
import {FormControl, InputLabel, List, ListItem, MenuItem, Select} from "@mui/material";
import {entityAnimationsOptions} from "./EntityAnimations.const.ts";
import {useSelector} from "react-redux";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {EntityAnimationView} from "../../components/EntityAnimationView";
import styles from './EntityAnimations.module.scss';

export const EntityAnimations = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    const [animationType, setAnimationType] = useState<EntityAnimationTypeUnion>(EntityAnimationType.runDown)

    if (!entityData) return <></>

    return <div>
        <FormControl fullWidth sx={{marginBottom: '40px'}}>
            <InputLabel id="demo-simple-select-label">Animation type</InputLabel>
            <Select
                value={animationType}
                label="Animation type"
                onChange={e => setAnimationType(e.target.value as EntityAnimationTypeUnion)}
            >
                {entityAnimationsOptions.map(({label, animation}) => <MenuItem value={animation}>{label}</MenuItem>)}
            </Select>
        </FormControl>
        <List className={styles.list}>
            {entityData.animations[animationType].map((_, index) => <ListItem key={`entity-animation-${index}`}>
                <EntityAnimationView animationType={animationType} animationIndex={index}
                />
            </ListItem>)}
        </List>
    </div>
}