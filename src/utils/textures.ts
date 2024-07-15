import bushSprite from '../assets/map/objects/environment/bushes.png';
import minesSprite from '../assets/map/objects/environment/mines.png';
import treesSprite from '../assets/map/objects/environment/trees.png';
import cropsSprite from '../assets/map/objects/environment/crops.png';
import grassSprite from '../assets/map/objects/environment/grass.png';
import fruitTreesSprite from '../assets/map/objects/environment/fruit-trees.png';
import {GameObjectTextureName, GameObjectTextureNameUnion} from "../models/GameObject.ts";
import buildingBarn from '../assets/map/buildings/barn.png';
import buildingBeachCabin from '../assets/map/buildings/beach_cabin.png';
import buildingBigBarn from '../assets/map/buildings/big_barn.png';
import buildingBigCoop from '../assets/map/buildings/big_coop.png';
import buildingBigShed from '../assets/map/buildings/big_shed.png';
import buildingCoop from '../assets/map/buildings/coop.png';
import buildingDeluxeBarn from '../assets/map/buildings/deluxe_barn.png';
import buildingDeluxeCoop from '../assets/map/buildings/deluxe_coop.png';
import buildingDesertObelisk from '../assets/map/buildings/desert_obelisk.png';
import buildingEarthObelisk from '../assets/map/buildings/earth_obelisk.png';
import buildingError from '../assets/map/buildings/error.png';
import buildingFishPond from '../assets/map/buildings/fish_pond.png';
import buildingGoldClock from '../assets/map/buildings/gold_clock.png';
import buildingGreenhouse from '../assets/map/buildings/greenhouse.png';
import buildingHayPetBowl from '../assets/map/buildings/hay_pet_bowl.png';
import buildingHouses from '../assets/map/buildings/houses.png';
import buildingIslandObelisk from '../assets/map/buildings/island_obelisk.png';
import buildingJunimoHut from '../assets/map/buildings/junimo_hut.png';
import buildingLogCabin from '../assets/map/buildings/log_cabin.png';
import buildingMailbox from '../assets/map/buildings/mailbox.png';
import buildingMill from '../assets/map/buildings/mill.png';
import buildingNeightbourCabin from '../assets/map/buildings/neightbour_cabin.png';
import buildingPetBowl from '../assets/map/buildings/pet_bowl.png';
import buildingPlankCabin from '../assets/map/buildings/plank_cabin.png';
import buildingRusticCabin from '../assets/map/buildings/rustic_cabin.png';
import buildingShed from '../assets/map/buildings/shed.png';
import buildingShippingBin from '../assets/map/buildings/shipping_bin.png';
import buildingSilo from '../assets/map/buildings/silo.png';
import buildingSlimeHutch from '../assets/map/buildings/slime_hutch.png';
import buildingStable from '../assets/map/buildings/stable.png';
import buildingStoneCabin from '../assets/map/buildings/stone_cabin.png';
import buildingStonePetBowl from '../assets/map/buildings/stone_pet_bowl.png';
import buildingTrailerCabin from '../assets/map/buildings/treiler_cabin.png';
import buildingWaterObelisk from '../assets/map/buildings/water_obelisk.png';
import buildingWell from '../assets/map/buildings/well.png';
import terrainFeaturesHoeDirt from '../assets/map/terrainFeatures/hoeDirt.png';
import terrainFeatuesFlooring from '../assets/map/terrainFeatures/Flooring.png';

const textures = {
    [GameObjectTextureName.Mines]: minesSprite,
    [GameObjectTextureName.Bushes]: bushSprite,
    [GameObjectTextureName.Trees]: treesSprite,
    [GameObjectTextureName.Crops]: cropsSprite,
    [GameObjectTextureName.Grass]: grassSprite,
    [GameObjectTextureName.FruitTree]: fruitTreesSprite,
    [GameObjectTextureName.BuildingBarn]: buildingBarn,
    [GameObjectTextureName.BuildingBeachCabin]: buildingBeachCabin,
    [GameObjectTextureName.BuildingBigBarn]: buildingBigBarn,
    [GameObjectTextureName.BuildingBigCoop]: buildingBigCoop,
    [GameObjectTextureName.BuildingBigShed]: buildingBigShed,
    [GameObjectTextureName.BuildingCoop]: buildingCoop,
    [GameObjectTextureName.BuildingDeluxeBarn]: buildingDeluxeBarn,
    [GameObjectTextureName.BuildingDeluxeCoop]: buildingDeluxeCoop,
    [GameObjectTextureName.BuildingDesertObelisk]: buildingDesertObelisk,
    [GameObjectTextureName.BuildingEarthObelisk]: buildingEarthObelisk,
    [GameObjectTextureName.BuildingError]: buildingError,
    [GameObjectTextureName.BuildingFishPond]: buildingFishPond,
    [GameObjectTextureName.BuildingGoldClock]: buildingGoldClock,
    [GameObjectTextureName.BuildingGreenhouse]: buildingGreenhouse,
    [GameObjectTextureName.BuildingHeyPetBowl]: buildingHayPetBowl,
    [GameObjectTextureName.BuildingHouses]: buildingHouses,
    [GameObjectTextureName.BuildingIslandObelisk]: buildingIslandObelisk,
    [GameObjectTextureName.BuildingJunimoHut]: buildingJunimoHut,
    [GameObjectTextureName.BuildingLogCabin]: buildingLogCabin,
    [GameObjectTextureName.BuildingMailbox]: buildingMailbox,
    [GameObjectTextureName.BuildingMill]: buildingMill,
    [GameObjectTextureName.BuildingNeightbourCabin]: buildingNeightbourCabin,
    [GameObjectTextureName.BuildingPetBowl]: buildingPetBowl,
    [GameObjectTextureName.BuildingPlankCabin]: buildingPlankCabin,
    [GameObjectTextureName.BuildingRusticCabin]: buildingRusticCabin,
    [GameObjectTextureName.BuildingShed]: buildingShed,
    [GameObjectTextureName.BuildingShippingBin]: buildingShippingBin,
    [GameObjectTextureName.BuildingSilo]: buildingSilo,
    [GameObjectTextureName.BuildingSlimeHutch]: buildingSlimeHutch,
    [GameObjectTextureName.BuildingStable]: buildingStable,
    [GameObjectTextureName.BuildingStoneCabin]: buildingStoneCabin,
    [GameObjectTextureName.BuildingStonePetBowl]: buildingStonePetBowl,
    [GameObjectTextureName.BuildingTreilerCabin]: buildingTrailerCabin,
    [GameObjectTextureName.BuildingWaterObelisk]: buildingWaterObelisk,
    [GameObjectTextureName.BuildingWell]: buildingWell,
    [GameObjectTextureName.HoeDirt]: terrainFeaturesHoeDirt,
    [GameObjectTextureName.Flooring]: terrainFeatuesFlooring
}

export const getTexture = (textureName: GameObjectTextureNameUnion) => {
    return textures[textureName]
}