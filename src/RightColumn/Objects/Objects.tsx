import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {ObjectsTypes} from "./Objects.types.ts";
import {objectTypeOptions} from "./Objects.const.ts";
import {BushesList} from "./BushesList";
import {BushesData} from "../../const/objects/bushes/bushes.ts";
import {MinesData} from "../../const/objects/mines/mines.ts";
import {MultiStageList} from "./MultiStageList";
import {TreesData} from "../../const/objects/trees/trees.ts";
import {CropsData} from "../../const/objects/crops/crops.ts";
import {GrassData} from "../../const/objects/grass/grass.ts";
import {FruitTreesData} from "../../const/objects/fruitTree/fruit-trees.ts";
import {BuildingsData} from "../../const/objects/buildings/buildings.ts";
import {FlooringData} from "../../const/objects/flooring/flooring.ts";
import {HoeDirtData} from "../../const/objects/hoeDirt/hoeDirt.ts";

export const Objects = () => {
    const [objectsType, setObjectsType] = useState<ObjectsTypes>(ObjectsTypes.Bushes);

    return <div>
        <FormControl fullWidth>
            <InputLabel>Tiles</InputLabel>
            <Select
                id="object-type-select"
                value={objectsType}
                label="Tiles"
                onChange={(e) => setObjectsType(Number(e.target.value))}
            >
                {objectTypeOptions.map(({type, label}) => <MenuItem value={type}
                                                                    key={`object-type-select-${type}`}>{label}</MenuItem>)}
            </Select>
        </FormControl>

        {objectsType === ObjectsTypes.Bushes && <BushesList objects={BushesData}/>}
        {objectsType === ObjectsTypes.Mines && <BushesList objects={MinesData}/>}
        {objectsType === ObjectsTypes.Trees && <MultiStageList objects={TreesData}/>}
        {objectsType === ObjectsTypes.FruitTrees && <MultiStageList objects={FruitTreesData}/>}
        {/*{objectsType === ObjectsTypes.StaticTrees && <MultiStageList objects={StaticTreesData}/>}*/}
        {objectsType === ObjectsTypes.Crops && <MultiStageList objects={CropsData}/>}
        {objectsType === ObjectsTypes.Grass && <BushesList objects={GrassData}/>}
        {objectsType === ObjectsTypes.Building && <BushesList objects={BuildingsData}/>}
        {objectsType === ObjectsTypes.Flooring && <BushesList objects={FlooringData}/>}
        {objectsType === ObjectsTypes.HoeDirt && <BushesList objects={HoeDirtData}/>}
    </div>
}