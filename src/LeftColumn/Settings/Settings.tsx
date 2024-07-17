import {Box, FormControl, IconButton, InputLabel, List, ListItem, MenuItem, Select, Tooltip} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../store/AppReducer.ts";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Settings = () => {
    const dispatch = useDispatch();

    const mapLayer = useSelector(AppSelectors.mapLayer);
    const mapLayers = useSelector(AppSelectors.mapLayers);

    const handleToggleMapLayerVisibility = useCallback((event, layerIndex: number) => {
        event.preventDefault();
        dispatch(AppSliceActions.toggleMapLayerVisibility({layerIndex}))
    }, [dispatch])

    return <div>
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
}