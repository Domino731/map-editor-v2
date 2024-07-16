import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {entityTypeOptions} from "./Entities.const.ts";
import {EntityType, EntityTypeUnion} from "../../models/Entities.ts";
import {BushesList} from "../Objects/BushesList";
import {createSingleStageObjects} from "./Entities.utils.ts";
import {AnimalsData} from "../../const/characters/animals/animals.ts";

export const Entities = () => {
    const [entityType, setEntityType] = useState<EntityTypeUnion>(EntityType.Animal);

    return <>
        <FormControl fullWidth>
            <InputLabel>Entity type</InputLabel>
            <Select
                id="object-type-select"
                value={entityType}
                label="Entity type"
                onChange={(e) => setEntityType(e.target.value)}
            >
                {entityTypeOptions.map(({value, label}) => <MenuItem value={value}
                                                                     key={`object-type-select-${value}`}>{label}</MenuItem>)}
            </Select>
        </FormControl>

        {entityType === EntityType.Animal && <BushesList objects={createSingleStageObjects(AnimalsData)}/>}
    </>
}