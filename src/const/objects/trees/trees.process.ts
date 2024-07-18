import {TreeObjectModel} from "../../../models/GameObject.ts";
import {TreeJsonModel} from "../../types.ts";
import {processObjectActionType, processObjectType} from "../../utils.ts";
import {generateUUID} from "../../../utils/string.ts";
import {GameActorType} from "../../../models/game.ts";
import {GameObjectTextureName} from "../../../models/textures.ts";

export const processTreeData = (data: TreeJsonModel): TreeObjectModel => ({
    id: data.id,
    name: data.name,
    type: processObjectType(data.type),
    actorType: GameActorType.Object,
    specs: {
        treeTrunk: {
            x: data.specs.trunk.x,
            y: data.specs.trunk.y,
            width: data.specs.trunk.width,
            height: data.specs.trunk.height,
            offsetX: data.specs.trunk.offset_x,
            offsetY: data.specs.trunk.offset_y
        },
        stages: data.specs.stages.map(el => ({
            texture: {
                name: GameObjectTextureName.Trees,
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
            },
            nextStage: el.next_stage,
            drop: el.drop.map(el => ({
                id: el.id,
                amount: el.amount,
                chance: el.chance
            })),
            actionCollisions: el.action_collisions.map((el) => ({
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
                actionType: processObjectActionType(el.action_type),
                uuid: generateUUID()
            })),
            zIndex: {
                x: el.z_index.x,
                y: el.z_index.y,
                width: el.z_index.width,
                height: el.z_index.height,
            },
            groundPlace: {
                width: el.ground_place.width,
                height: el.ground_place.height,
                textureXOffset: el.ground_place.texture_x_offset,
                textureYOffset: el.ground_place.texture_y_offset,
            },
            groundCollision: {
                x: el.ground_collision.x,
                y: el.ground_collision.y,
                width: el.ground_collision.width,
                height: el.ground_collision.height
            }
        }))
    }
})