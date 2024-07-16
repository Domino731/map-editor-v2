export const createSingleStageObjects = (data: Array<any>) => data.map((el) => ({
    id: el.id,
    name: el.name,
    texture: el.specs.texture
}))