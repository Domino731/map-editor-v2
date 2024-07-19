import {ActorDrop} from "../../../components/ActorDrop";
import {useDispatch, useSelector} from "react-redux";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {useCallback} from "react";
import {entityDetailsModalSliceActions} from "../../store.ts";
import {ActorDropFormikFormData} from "../../../components/ActorDropForm/ActorDropForm.types.ts";
import {generateUUID} from "../../../../utils/string.ts";

export const EntityDrop = () => {
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    const handleDeleteDrop = useCallback((uuid: string) => {
        dispatch(entityDetailsModalSliceActions.deleteObjectDrop(uuid))
    }, [dispatch])

    const handleAddDrop = useCallback((drop: ActorDropFormikFormData) => {
        dispatch(entityDetailsModalSliceActions.addEntityDrop({
            id: drop.itemId,
            chance: drop.chance,
            amount: drop.amount,
            uuid: generateUUID()
        }))
    }, [dispatch])

    if (!entityData) return;
    return <ActorDrop
        dropData={entityData.drop}
        onDropDelete={handleDeleteDrop}
        onDropAdd={handleAddDrop}
    />
}