import {FlooringJsonData} from "./flooring.types.ts";
import {processObjectActionType, processObjectTexture, processObjectType} from "../../utils.ts";
import {generateUUID} from "../../../utils/string.ts";
import {GameActorType} from "../../../models/game.ts";

export const processFlooringData = (data: FlooringJsonData) => ({
    id: data.id,
    name: data.name,
    type: processObjectType(data.type),
    actorType: GameActorType.Object,
    specs: {
        texture: {
            name: processObjectTexture(data.specs.texture.name),
            x: data.specs.texture.x,
            y: data.specs.texture.y,
            width: data.specs.texture.width,
            height: data.specs.texture.height
        },
        drop: data.specs.drop.map(el => ({
            id: el.id,
            amount: el.amount,
            chance: el.chance
        })),
        exp: data.specs.exp,
        actionCollisions: data.specs.action_collisions.map((el) => ({
            x: el.x,
            y: el.y,
            width: el.width,
            height: el.height,
            actionType: processObjectActionType(el.action_type),
            uuid: generateUUID()
        })),
        zIndex: {
            x: data.specs.z_index.x,
            y: data.specs.z_index.y,
            width: data.specs.z_index.width,
            height: data.specs.z_index.height,
        },
        groundPlace: {
            width: data.specs.ground_place.width,
            height: data.specs.ground_place.height,
            textureXOffset: data.specs.ground_place.texture_x_offset,
            textureYOffset: data.specs.ground_place.texture_y_offset,
        },
        groundCollision: {
            x: data.specs.ground_collision.x,
            y: data.specs.ground_collision.y,
            width: data.specs.ground_collision.width,
            height: data.specs.ground_collision.height
        }
    }
})