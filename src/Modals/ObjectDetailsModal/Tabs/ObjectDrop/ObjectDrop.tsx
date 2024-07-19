import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";
import {useCallback, useMemo} from "react";
import {GameMultiStageObjectUnion, GameObjectDrop, GameSingleStageObjectUnion} from "../../../../models/GameObject.ts";
import {ActorDropFormikFormData} from "../../../components/ActorDropForm/ActorDropForm.types.ts";
import {ActorDrop} from "../../../components/ActorDrop";
import {generateUUID} from "../../../../utils/string.ts";


export const ObjectDrop = () => {
    const dispatch = useDispatch();

    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;

    const objectDataDrop = useMemo((): GameObjectDrop[] => {
        if (!objectData) return []
        const multiStageObject = objectData as GameMultiStageObjectUnion;
        const stages = multiStageObject.specs.stages;
        if (stages) {
            return stages[objectStage].drop;
        }
        return (objectData as GameSingleStageObjectUnion).specs.drop;
    }, [objectData, objectStage])

    const handleAddDrop = useCallback((drop: ActorDropFormikFormData) => {
        dispatch(objectDetailsModalSliceActions.addDrop({
            uuid: generateUUID(),
            id: drop.itemId,
            chance: drop.chance,
            amount: drop.amount
        }))
    }, [dispatch]);

    const handleDeleteDrop = useCallback((uuid: string) => {
        dispatch(objectDetailsModalSliceActions.deleteObjectDrop(uuid))
    }, [dispatch])

    if (!objectData) return <>Loading...</>

    return <ActorDrop
        dropData={objectDataDrop}
        onDropDelete={handleDeleteDrop}
        onDropAdd={handleAddDrop}
    />
}