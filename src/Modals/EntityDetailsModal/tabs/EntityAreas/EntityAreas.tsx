import {ActorAreas} from "../../../components/ActorAreas/ActorAreas.tsx";
import {useDispatch, useSelector} from "react-redux";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {useCallback} from "react";
import {entityDetailsModalSliceActions} from "../../store.ts";
import {VectorAreas} from "./VectorAreas.tsx";
import {EntityPreview} from "./EntityPreview.tsx";

export const EntityAreas = () => {
    const dispatch = useDispatch();

    const settings = useSelector(entityDetailsModalSelectors.areasSettings);

    const handleChangeSettings = useCallback((name: string, value: boolean) => {
        dispatch(entityDetailsModalSliceActions.setEntityAreasSettings({...settings, [name]: value}))
    }, [dispatch, settings])

    return <ActorAreas
        isHitBoxVisible
        isObjectStageSelectVisible={false}
        areasSettings={settings}
        onSettingsChange={handleChangeSettings}
        actorAreasComponent={<VectorAreas/>}
        actorPreviewComponent={<EntityPreview/>}
    />
}