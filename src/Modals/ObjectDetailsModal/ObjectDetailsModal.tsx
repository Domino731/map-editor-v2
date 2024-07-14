import {Modal, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppSliceActions} from "../../store/AppReducer.ts";
import styles from './ObjectDetailsModal.module.scss';
import {useCallback, useEffect, useState} from "react";
import {ObjectDetailsModelTabs} from "./ObjectDetailsModel.const.ts";
import {ObjectGeneralInfo} from "./Tabs/ObjectGeneralInfo";
import {ObjectAreas} from "./Tabs/ObjectAreas";
import Button from "@mui/material/Button";
import {downloadJSON} from "../../utils/json.ts";
import {ObjectDrop} from "./Tabs/ObjectDrop";
import {objectDetailsModalSliceActions} from "./store.ts";
import {objectDetailsModalSelectors} from "./store.selectors.ts";

export interface ObjectDetailsModalProps {
    isOpen: boolean;
    objectId: string;
}

export const ObjectDetailsModal = ({isOpen, objectId}: ObjectDetailsModalProps) => {
    const dispatch = useDispatch();

    const [tab, setTab] = useState<ObjectDetailsModelTabs>(ObjectDetailsModelTabs.Drop);

    useEffect(() => {
        dispatch(objectDetailsModalSliceActions.setObjectDataById(objectId));
    }, [dispatch]);


    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const TabComponent = useCallback(() => {
        switch (tab) {
            case ObjectDetailsModelTabs.General:
                return <ObjectGeneralInfo/>
            case ObjectDetailsModelTabs.Areas:
                return <ObjectAreas objectData={objectData}/>
            case ObjectDetailsModelTabs.Drop:
                return <ObjectDrop/>
            default:
                return null;
        }
    }, [objectData, tab])

    const handleDownloadJsonFile = useCallback(() => {
        downloadJSON({test: '123'}, objectData?.id)
    }, [objectData?.id])

    if (!objectData) return <>Loading...</>

    return <Modal
        open={isOpen}
        onClose={() => dispatch(AppSliceActions.closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
    >
        <div className={styles.box}>
            <div className={styles.titleBar}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Object details: {objectData.name}
                </Typography>
                <Button variant="outlined" color="success" onClick={handleDownloadJsonFile}>Download .json</Button>
            </div>
            <Tabs value={tab} aria-label="right-column-tabs" className={styles.tabs} variant="fullWidth">
                <Tab label="General" value={ObjectDetailsModelTabs.General}
                     onClick={() => setTab(ObjectDetailsModelTabs.General)}/>
                <Tab label="Areas" value={ObjectDetailsModelTabs.Areas}
                     onClick={() => setTab(ObjectDetailsModelTabs.Areas)}/>
                <Tab label="Drop" value={ObjectDetailsModelTabs.Drop}
                     onClick={() => setTab(ObjectDetailsModelTabs.Drop)}/>
            </Tabs>
            <TabComponent/>
        </div>
    </Modal>
}