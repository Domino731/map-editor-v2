import {useCallback} from "react";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {objectDetailsModalSelectors} from "../../store.selectors.ts";
import {GameObjectType} from "../../../../models/GameObject.ts";
import {
    useProcessCommonMultiStageObject,
    useProcessCommonSingleStageObject,
    useProcessCommonTreeObject
} from "./DownloadObjectButton.utils.ts";
import {downloadJSON} from "../../../../utils/json.ts";

export const DownloadObjectButton = () => {
    const objectData = useSelector(objectDetailsModalSelectors.objectData);

    const processCommonSingleStageObject = useProcessCommonSingleStageObject();
    const processCommonMultiStageObject = useProcessCommonMultiStageObject();
    const processCommonTreeObject = useProcessCommonTreeObject();

    const handleDownloadJsonFile = useCallback(() => {
        if (!objectData) return;
        const fileName = objectData.id;
        switch (objectData.type) {
            case GameObjectType.Mine:
            case GameObjectType.Bush:
            case GameObjectType.Grass:
            case GameObjectType.Building:
            case GameObjectType.Flooring:
            case GameObjectType.HoeDirt:
                downloadJSON(processCommonSingleStageObject(), fileName)
                break;
            case GameObjectType.Crop:
            case GameObjectType.FruitTree:
                downloadJSON(processCommonMultiStageObject(), fileName)
                break;
            case GameObjectType.Tree:
                downloadJSON(processCommonTreeObject(), fileName)
                break;
            default:
                alert(`handleDownloadJsonFile: no match for ${objectData.type}`)
        }


        alert("TODO: add download functionality")
    }, [])

    return <Button variant="outlined" color="success" onClick={handleDownloadJsonFile}>Download .json</Button>
}