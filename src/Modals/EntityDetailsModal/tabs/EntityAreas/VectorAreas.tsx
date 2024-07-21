import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {Vector} from "../../../../types.ts";
import {ActionVectorForm, VectorForm} from "../../../ObjectDetailsModal/Tabs/ObjectAreas/VectorForm.tsx";
import {objectAreasColors} from "../../../ObjectDetailsModal/Tabs/ObjectAreas/ObjectAreas.const.ts";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {entityDetailsModalSliceActions} from "../../store.ts";

export const VectorAreas = () => {
    const dispatch = useDispatch();

    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    const handleChangeVector = useCallback((vector: Vector, name: string) => {
        if (!entityData) return;
        switch (name) {
            case "texture":
                dispatch(entityDetailsModalSliceActions.setEntityTexture({
                    width: vector.width,
                    height: vector.height
                }));
                break;
            case "groundCollision":
                dispatch(entityDetailsModalSliceActions.setEntityGroundCollision(vector));
                break;
            case "zIndexLine":
                dispatch(entityDetailsModalSliceActions.setEntityZIndex(vector));
                break;
            case "groundVector":
                dispatch(entityDetailsModalSliceActions.setEntityGroundPlace({
                    width: vector.width,
                    height: vector.height,
                    textureYOffset: vector.y,
                    textureXOffset: vector.x
                }));
                break;
            case "hitBox":
                dispatch(entityDetailsModalSliceActions.setEntityHitBox(vector));
                break;
        }
    }, [dispatch, entityData])

    const texture = useMemo(() => {
        if (!entityData) return;
        return {
            x: entityData.presentationTextureCords.x,
            y: entityData.presentationTextureCords.y,
            width: entityData.texture.width,
            height: entityData.texture.height,
            name: entityData.texture.name
        }
    }, [entityData])

    if (!entityData) return <>Loading...</>

    return <div>
        {texture &&
            <VectorForm isInputHidden={{x: true, y: true}} color={objectAreasColors.texture} title="Texture"
                        data={texture}
                        onChange={vector => handleChangeVector(vector, 'texture')}/>}

        <VectorForm color={objectAreasColors.hitBox} title="Hit box"
                    data={entityData.hitBox}
                    onChange={vector => handleChangeVector(vector, 'hitBox')}
        />

        <VectorForm color={objectAreasColors.groundCollision} title="Ground collision"
                    data={entityData.groundCollision}
                    onChange={vector => handleChangeVector(vector, 'groundCollision')}
        />

        <VectorForm color={objectAreasColors.groundArea} title="Ground place" data={{
            ...entityData.groundPlace,
            x: entityData.groundPlace.textureXOffset,
            y: entityData.groundPlace.textureYOffset
        }}
                    onChange={vector => handleChangeVector(vector, 'groundVector')} labels={{
            x: "Texture x offset",
            y: "Texture y offset"
        }}/>

        <VectorForm color={objectAreasColors.zIndexLine} title="Z Index line" data={entityData.zIndex}
                    onChange={vector => handleChangeVector(vector, 'zIndexLine')}/>
        <ActionVectorForm
            title="Actions"
            // TODO add color
            data={entityData.actionCollisions.map(el => ({...el, color: 'red'}))}
            onChange={(actionVectors) => dispatch(entityDetailsModalSliceActions.setEntityActionsCollisions(actionVectors))}
        />
    </div>
}