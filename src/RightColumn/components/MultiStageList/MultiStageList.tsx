import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './MultiStageList.module.scss';
import {ObjectImage} from "../../../components/ObjectImage";
import {Box, IconButton, Tooltip, useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../../store/AppReducer.ts";
import {Modals} from "../../../Modals/ModalManager.types.ts";
import InfoIcon from "@mui/icons-material/Info";
import {CropObjectModel, TreeObjectModel} from "../../../models/GameObject.ts";

interface MultiStageListProps {
    objects: Array<TreeObjectModel | CropObjectModel>;
}

export const MultiStageList = ({objects}: MultiStageListProps) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const currentObjectId = useSelector(AppSelectors.objectId);
    const objectStage = useSelector(AppSelectors.objectStage);


    return (
        <ul className={styles.list}>
            {objects.map(object => <li key={`multi-stage-list-${object.id}`}>
                <Accordion className={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className={styles.accordionSummary}
                    >
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <p style={{
                                margin: 0,
                                color: currentObjectId === object.id ? theme.palette.primary.main : 'white'
                            }}> {object.name}</p>
                            <Tooltip title="Details">
                                <IconButton
                                    onClick={(e) => {
                                        console.log('open');
                                        e.preventDefault();
                                        dispatch(AppSliceActions.setActiveModel({
                                            modalName: Modals.ObjectDetails, modalProps: {
                                                objectId: object.id
                                            }
                                        }))
                                    }}>
                                    <InfoIcon/>
                                </IconButton>
                            </Tooltip>
                        </Box>


                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                        <ul className={styles.stageList}>
                            {object.specs.stages.map((stage, stageIndex) => <li
                                className={styles.stageListItem}
                                key={`multi-stage-list-${object.id}-${stageIndex}`}
                                onClick={() => dispatch(AppSliceActions.setObjectIdWithStage({
                                    id: object.id,
                                    stage: stageIndex
                                }))}
                            >
                                <ObjectImage texture={stage.texture}/>
                                <p style={{
                                    margin: 0,
                                    color: (currentObjectId === object.id && objectStage === stageIndex) ? theme.palette.primary.main : 'white'
                                }}>
                                    Stage {stageIndex + 1}
                                </p>
                            </li>)}

                        </ul>
                    </AccordionDetails>
                </Accordion>
            </li>)}
        </ul>
    );
}