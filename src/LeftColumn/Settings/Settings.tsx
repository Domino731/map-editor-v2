import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../store/AppReducer.ts";

export const Settings = () => {
    const dispatch = useDispatch();

    const mapLayer = useSelector(AppSelectors.mapLayer);
    const mapLayers = useSelector(AppSelectors.mapLayers);

    const mapLayerOption = useMemo(() => {
        console.log(mapLayers)
        return Array.from(Array(mapLayers).keys())
    }, [mapLayers])

    return <div>
        <FormControl fullWidth>
            <InputLabel>Map layer</InputLabel>
            <Select
                value={mapLayer}
                label="Age"
                onChange={(e) => dispatch(AppSliceActions.setMapLayer(Number(e.target.value)))}
            >
                {mapLayerOption.map((_, i) => <MenuItem
                    value={i}>{i + 1}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
}