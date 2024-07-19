import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {entityDetailsModalSelectors} from "../../store.selectors.ts";
import {useCallback} from "react";
import {AnimalJsonData} from "../../../../const/characters/animals/animals.types.ts";
import {downloadJSON} from "../../../../utils/json.ts";

export const DownloadEntityButton = () => {
    const entityData = useSelector(entityDetailsModalSelectors.entityData);

    const handleDownloadJsonFile = useCallback(() => {
        if (!entityData) return;
        const jsonData: AnimalJsonData = {
            id: entityData.id,
            name: entityData.name,
            texture: entityData.texture,
            presentation_texture_cords: entityData.presentationTextureCords,
            ground_place: {
                texture_x_offset: entityData.groundPlace.textureXOffset,
                texture_y_offset: entityData.groundPlace.textureYOffset,
                width: entityData.groundPlace.width,
                height: entityData.groundPlace.height
            },
            ground_collision: entityData.groundCollision,
            z_index: entityData.zIndex,
            action_collisions: entityData.actionCollisions.map(el => ({
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
                action_type: el.actionType
            })),
            drop: entityData.drop,
            hit_box: entityData.hitBox,
            hp: entityData.hp,
            exp: entityData.exp,
            animations: {
                run_down: entityData.animations.runDown,
                run_right: entityData.animations.runRight,
                run_up: entityData.animations.runUp,
                run_left: entityData.animations.runLeft,
            }
        }
        downloadJSON(jsonData, entityData.id)
    }, [entityData])

    return <Button variant="outlined" color="success" onClick={handleDownloadJsonFile}>Download .json</Button>;
}