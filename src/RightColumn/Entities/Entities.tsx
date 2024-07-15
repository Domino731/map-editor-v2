import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {entityTypeOptions} from "./Entities.const.ts";
import {EntityType, EntityTypeUnion} from "../../models/Entities.ts";

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
    </>
}