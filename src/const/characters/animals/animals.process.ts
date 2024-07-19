import {AnimalJsonData} from "./animals.types.ts";
import {AnimalModel, EntityType} from "../../../models/Entities.ts";
import {generateUUID} from "../../../utils/string.ts";
import {processObjectActionType, processObjectTexture} from "../../utils.ts";
import {GameActorType} from "../../../models/game.ts";

export const processAnimalData = (data: AnimalJsonData): AnimalModel => ({
    entityType: EntityType.Animal,
    id: data.id,
    name: data.name,
    actorType: GameActorType.Entity,
    texture: {
        name: processObjectTexture(data.texture.name),
        width: data.texture.width,
        height: data.texture.height
    },
    presentationTextureCords: {
        x: data.presentation_texture_cords.x,
        y: data.presentation_texture_cords.y
    },
    groundPlace: {
        textureXOffset: data.ground_place.texture_x_offset,
        textureYOffset: data.ground_place.texture_y_offset,
        width: data.ground_place.width,
        height: data.ground_place.height
    },
    groundCollision: {
        x: data.ground_collision.x,
        y: data.ground_collision.y,
        width: data.ground_collision.width,
        height: data.ground_collision.height
    },
    actionCollisions: data.action_collisions.map(el => ({
        x: el.x,
        y: el.y,
        width: el.width,
        height: el.height,
        actionType: processObjectActionType(el.action_type),
        uuid: generateUUID()
    })),
    drop: data.drop.map(el => ({
        id: el.id,
        amount: el.amount,
        chance: el.chance,
        uuid: generateUUID()
    })),
    zIndex: {
        x: data.z_index.x,
        y: data.z_index.y,
        width: data.z_index.width,
        height: data.z_index.height,
    },
    hitBox: {
        x: data.hit_box.x,
        y: data.hit_box.y,
        width: data.hit_box.width,
        height: data.hit_box.height
    },
    hp: data.hp,
    exp: data.exp,
    damage: 0,
    animations: {
        runDown: data.animations.run_down,
        runRight: data.animations.run_right,
        runUp: data.animations.run_up,
        runLeft: data.animations.run_left
    }
})