import {useDispatch, useSelector} from "react-redux";
import {TextField} from "@mui/material";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {EntityType} from "../../../../models/Entities.ts";
import styles from './EntityGeneralInfo.module.scss';
import {entityDetailsModalSliceActions} from "../../store.ts";

export const EntityGeneralInfo = () => {
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    if (!entityData) return;

    return <div className={styles.inputs}>
        <TextField label="Name" value={entityData.name}
                   onChange={({target: {value}}) => dispatch(entityDetailsModalSliceActions.setEntityName(value))}
        />
        <TextField type="number" label="HP" value={entityData.hp}
                   onChange={({target: {value}}) => dispatch(entityDetailsModalSliceActions.setEntityHp(Number(value)))}
        />
        {entityData.entityType !== EntityType.Animal &&
            <TextField type="number" label="Damage" value={entityData.damage}
                       onChange={({target: {value}}) => dispatch(entityDetailsModalSliceActions.setEntityDamage(Number(value)))}
            />}
        <TextField type="number" label="Exp" value={entityData.exp}
                   onChange={({target: {value}}) => dispatch(entityDetailsModalSliceActions.setEntityExp(Number(value)))}
        />
    </div>
}