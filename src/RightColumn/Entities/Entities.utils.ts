import {EntityModel} from "../../models/Entities.ts";
import {GameActorType} from "../../models/game.ts";

export const createSingleStageObjects = (data: Array<EntityModel>) => data.map((el) => ({
    id: el.id,
    name: el.name,
    texture: {
        name: el.texture.name,
        x: el.presentationTextureCords.x,
        y: el.presentationTextureCords.y,
        width: el.texture.width,
        height: el.texture.height
    },
    actorType: GameActorType.Entity
}))