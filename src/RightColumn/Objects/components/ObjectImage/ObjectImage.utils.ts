import appleStage5Harvest from '../../../../assets/map/objects/environment/harvest/apple-stage-5-harvest.png';
import apricotStage5Harvest from '../../../../assets/map/objects/environment/harvest/apricot-stage-5-harvest.png';
import bananaStage5Harvest from '../../../../assets/map/objects/environment/harvest/banana-stage-5-harvest.png';
import cherryStage5Harvest from '../../../../assets/map/objects/environment/harvest/cherry-stage-5-harvest.png';
import mangoStage5Harvest from '../../../../assets/map/objects/environment/harvest/mango-stage-5-harvest.png';
import orangeStage5Harvest from '../../../../assets/map/objects/environment/harvest/orange-stage-5-harvest.png';
import peachStage5Harvest from '../../../../assets/map/objects/environment/harvest/peach-stage-5-harvest.png';
import pomegranateStage5Harvest
    from '../../../../assets/map/objects/environment/harvest/pomegranate-stage-5-harvest.png';

export const getObjectSprite = (spriteName: string) => {
    switch (spriteName) {
        case "apple-stage-5-harvest":
            return appleStage5Harvest;
        case "apricot-stage-5-harvest":
            return apricotStage5Harvest;
        case "banana-stage-5-harvest":
            return bananaStage5Harvest;
        case "cherry-stage-5-harvest":
            return cherryStage5Harvest;
        case "mango-stage-5-harvest":
            return mangoStage5Harvest;
        case "orange-stage-5-harvest":
            return orangeStage5Harvest;
        case "peach-stage-5-harvest":
            return peachStage5Harvest;
        case "pomegranate-stage-5-harvest":
            return pomegranateStage5Harvest;
        default:
            return null;
    }
}