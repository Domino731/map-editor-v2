import {
    Box, Checkbox,
    FormControl, FormControlLabel, FormGroup,
    IconButton,
    InputLabel,
    List,
    ListItem,
    MenuItem,
    Select,
    Tooltip,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../store/AppReducer.ts";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useMapSettingsOptions} from "./Settings.utils.ts";

const SettingsOptions = () => {
    const mapSettingsOptions = useMapSettingsOptions();

    return <FormGroup>
        {mapSettingsOptions.map(({label, onClick, isChecked}, index) => <FormControlLabel
            key={`settings-options-${index}`}
            onClick={onClick}
            control={<Checkbox checked={isChecked}/>}
            label={label}
        />)}
    </FormGroup>
}

export const Settings = () => {
    const dispatch = useDispatch();

    const mapLayer = useSelector(AppSelectors.mapLayer);
    const mapLayers = useSelector(AppSelectors.mapLayers);

    const handleToggleMapLayerVisibility = useCallback((event, layerIndex: number) => {
        event.preventDefault();
        dispatch(AppSliceActions.toggleMapLayerVisibility({layerIndex}))
    }, [dispatch])

    return <div>
        <div>
            <Typography variant='h6' gutterBottom>Map Layers</Typography>
            <FormControl fullWidth>
                <InputLabel>Map layer</InputLabel>
                <Select
                    value={mapLayer}
                    label="Age"
                    onChange={(e) => dispatch(AppSliceActions.setMapLayer(Number(e.target.value)))}
                >
                    {mapLayers.map((_, index) => <MenuItem
                        value={index}>{index + 1}</MenuItem>)}
                </Select>

                <List>
                    {mapLayers.map(({isVisible}, index) => <ListItem>
                        <Tooltip title="Toggle visibility">
                            <IconButton onClick={(e) => handleToggleMapLayerVisibility(e, index)}>
                                {isVisible ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                        </Tooltip>
                        Layer {index + 1}
                    </ListItem>)}
                </List>
            </FormControl>
        </div>
        <Typography variant='h6' gutterBottom>Map settings</Typography>
        <div>
            <SettingsOptions/>
        </div>
    </div>
}