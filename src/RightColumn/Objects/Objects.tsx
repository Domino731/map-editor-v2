import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useMemo, useState} from "react";
import {ObjectsTypes} from "./Objects.types.ts";
import {objectTypeOptions} from "./Objects.const.ts";
import {SingleStageList} from "../components/SingleStageList";
import {BushesData} from "../../const/objects/bushes/bushes.ts";
import {MinesData} from "../../const/objects/mines/mines.ts";
import {MultiStageList} from "../components/MultiStageList";
import {TreesData} from "../../const/objects/trees/trees.ts";
import {CropsData} from "../../const/objects/crops/crops.ts";
import {GrassData} from "../../const/objects/grass/grass.ts";
import {FruitTreesData} from "../../const/objects/fruitTree/fruit-trees.ts";
import {BuildingsData} from "../../const/objects/buildings/buildings.ts";
import {FlooringData} from "../../const/objects/flooring/flooring.ts";
import {HoeDirtData} from "../../const/objects/hoeDirt/hoeDirt.ts";
import {createSingleStageObjects} from "./Objects.utils.ts";
import {StaticTreesData} from "../../const/objects/staticTrees/staticTrees.ts";
import {DebrisData} from "../../const/objects/debris/debris.ts";

export const Objects = () => {
    const [objectsType, setObjectsType] = useState<ObjectsTypes>(ObjectsTypes.Bushes);

    const ObjectList = useMemo(() => {
        switch (objectsType) {
            case ObjectsTypes.Bushes:
                return <SingleStageList objects={createSingleStageObjects(BushesData)}/>
            case ObjectsTypes.Mines:
                return <SingleStageList objects={createSingleStageObjects(MinesData)}/>
            case ObjectsTypes.Trees:
                return <MultiStageList objects={TreesData}/>
            case ObjectsTypes.FruitTrees:
                return <MultiStageList objects={FruitTreesData}/>
            case ObjectsTypes.Crops:
                return <MultiStageList objects={CropsData}/>
            case ObjectsTypes.Grass:
                return <SingleStageList objects={createSingleStageObjects(GrassData)}/>
            case ObjectsTypes.Building:
                return <SingleStageList objects={createSingleStageObjects(BuildingsData)}/>
            case ObjectsTypes.Flooring:
                return <SingleStageList objects={createSingleStageObjects(FlooringData)}/>
            case ObjectsTypes.HoeDirt:
                return <SingleStageList objects={createSingleStageObjects(HoeDirtData)}/>
            case ObjectsTypes.StaticTrees:
                return <SingleStageList objects={createSingleStageObjects(StaticTreesData)}/>
            case ObjectsTypes.Debris:
                return <SingleStageList objects={createSingleStageObjects(DebrisData)}/>
            default:
                return null;
        }
    }, [objectsType])

    return <div>
        <FormControl fullWidth>
            <InputLabel>Object type</InputLabel>
            <Select
                id="object-type-select"
                value={objectsType}
                label="Object type"
                onChange={(e) => setObjectsType(Number(e.target.value))}
            >
                {objectTypeOptions.map(({type, label}) => <MenuItem value={type}
                                                                    key={`object-type-select-${type}`}>{label}</MenuItem>)}
            </Select>
        </FormControl>
        {ObjectList}
    </div>
}