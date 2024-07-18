import {ActionVectorForm, VectorForm} from "../../Tabs/ObjectAreas/VectorForm.tsx";
import {objectAreasColors} from "../../Tabs/ObjectAreas/ObjectAreas.const.ts";
import {useDispatch, useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {useCallback} from "react";
import {Vector} from "../../../../types.ts";
import {ObjectDetailsObjectAreasVectors} from "../../store.types.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";
import {GameMultiStageObjectUnion} from "../../../../models/GameObject.ts";

export const ObjectVectors = () => {
    const dispatch = useDispatch();

    const objectStage = useSelector(objectDetailsModalSelectors.objectStage) ?? 0;
    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const objectTreeTrunk = useSelector(objectDetailsModalSelectors.objectTreeTrunk);
    const objectAreasVectors = useSelector(objectDetailsModalSelectors.objectAreasVectors);

    const textureVector = objectAreasVectors.texture[objectStage];
    const groundCollision = objectAreasVectors.groundCollision[objectStage];
    const groundArea = objectAreasVectors.groundVectors[objectStage];
    const zIndexLine = objectAreasVectors.zIndexLines[objectStage];
    const actionCollisions = objectAreasVectors.actionCollisionsVectors[objectStage];

    const handleChangeVector = useCallback((vector: Vector, name: keyof ObjectDetailsObjectAreasVectors) => {
        dispatch(objectDetailsModalSliceActions.setObjectAreasVectors({
            name, vector
        }))
    }, [dispatch])

    if (!objectData) return <>Loading...</>

    return <div>
        {textureVector &&
            <VectorForm color={objectAreasColors.texture} title="Texture" data={textureVector}
                        onChange={vector => handleChangeVector(vector, 'texture')}/>}
        {groundCollision &&
            <VectorForm color={objectAreasColors.groundCollision} title="Ground collision"
                        data={groundCollision}
                        onChange={vector => handleChangeVector(vector, 'groundCollision')}
            />}
        {groundArea &&
            <VectorForm color={objectAreasColors.groundArea} title="Ground place" data={groundArea}
                        onChange={vector => handleChangeVector(vector, 'groundVectors')} labels={{
                x: "Texture x offset",
                y: "Texture y offset"
            }}/>}
        {zIndexLine &&
            <VectorForm color={objectAreasColors.zIndexLine} title="Z Index line" data={zIndexLine}
                        onChange={vector => handleChangeVector(vector, 'zIndexLines')}/>}
        {actionCollisions && <ActionVectorForm
            title="Actions"
            data={actionCollisions}
            onChange={(actionVectors) => dispatch(objectDetailsModalSliceActions.setObjectActionCollisionsVectors(actionVectors))}
        />}
        {(objectStage === (objectData as GameMultiStageObjectUnion).specs.stages.length - 1 && objectTreeTrunk) &&
            <VectorForm title="Tree trunk"
                        data={{width: 0, height: 0, ...objectTreeTrunk}}
                        onChange={({x, y}) => dispatch(objectDetailsModalSliceActions.setObjectAreasTrunkTree({x, y}))}
                        isInputHidden={{
                            width: true,
                            height: true
                        }}
            />}
    </div>
}