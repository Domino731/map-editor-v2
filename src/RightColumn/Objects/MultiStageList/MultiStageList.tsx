import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import styles from './MultiStageList.module.scss';
import {ObjectImage} from "../components/ObjectImage";
import {useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppSelectors} from "../../../store/AppReducer.selectors.ts";
import {AppSliceActions} from "../../../store/AppReducer.ts";
import {getObjectSprite} from "../components/ObjectImage/ObjectImage.utils.ts";

interface MultiStageListProps {
    objects: any[];
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
                        <p style={{
                            margin: 0,
                            color: currentObjectId === object.id ? theme.palette.primary.main : 'white'
                        }}> {object.name} {!object.specs.stages && 'No stages'}</p>

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
                                <ObjectImage sprite={getObjectSprite(stage.texture)} x={stage.x} y={stage.y}
                                             width={stage.width} height={stage.height}
                                             type={object.type}/>
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