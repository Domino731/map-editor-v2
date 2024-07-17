import {IconButton, List, ListItem, Tooltip, useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../store/AppReducer.selectors.ts";
import styles from './Tree.module.scss';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {AppSliceActions} from "../../store/AppReducer.ts";

export const Tree = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const actorsOnMap = useSelector(AppSelectors.actorsOnMap);


    return <div>
        <List className={styles.list}>
            {actorsOnMap.map((el, index) =>
                <ListItem
                    key={`actors-on-map-${el.uuid}`}
                    className={styles.listItem}
                    onMouseEnter={() => dispatch(AppSliceActions.setTreeHoveredObjectUuid(el.uuid))}
                    onMouseLeave={() => dispatch(AppSliceActions.setTreeHoveredObjectUuid(null))}
                >
                    <div>
                          <span className={styles.listItemIndexBox}
                                style={{background: theme.palette.primary.main}}>{index + 1}</span>
                        {el.displayName}
                        <span style={{color: 'red'}}> &ensp;{el.x}</span>
                        &ensp;/&ensp;
                        <span style={{color: 'yellow'}}>{el.y}</span>
                    </div>
                    <Tooltip title="Delete this actor from map">
                        <IconButton onClick={() => dispatch(AppSliceActions.deleteActorOnMap(el.uuid))}>
                            <DeleteRoundedIcon/>
                        </IconButton>
                    </Tooltip>
                </ListItem>)}
        </List>
    </div>
}