import {Modal, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppSliceActions} from "../../store/AppReducer.ts";
import styles from './ObjectDetailsModal.module.scss';
import {useCallback, useEffect, useState} from "react";
import {ObjectDetailsModelTabs} from "./ObjectDetailsModel.const.ts";
import {ObjectGeneralInfo} from "./Tabs/ObjectGeneralInfo";
import {ObjectAreas} from "./Tabs/ObjectAreas";
import Button from "@mui/material/Button";
import {ObjectDrop} from "./Tabs/ObjectDrop";
import {objectDetailsModalSliceActions} from "./store.ts";
import {objectDetailsModalSelectors} from "./store.selectors.ts";
import {DownloadObjectButton} from "./components/DownloadObjectButton";

export interface ObjectDetailsModalProps {
    isOpen: boolean;
    objectId: string;
}

export const ObjectDetailsModal = ({isOpen, objectId}: ObjectDetailsModalProps) => {
    const dispatch = useDispatch();

    const [tab, setTab] = useState<ObjectDetailsModelTabs>(ObjectDetailsModelTabs.Drop);

    useEffect(() => {
        dispatch(objectDetailsModalSliceActions.setObjectDataById(objectId));
    }, [dispatch, objectId]);


    const objectData = useSelector(objectDetailsModalSelectors.objectData);
    const TabComponent = useCallback(() => {
        switch (tab) {
            case ObjectDetailsModelTabs.General:
                return <ObjectGeneralInfo/>
            case ObjectDetailsModelTabs.Areas:
                return <ObjectAreas/>
            case ObjectDetailsModelTabs.Drop:
                return <ObjectDrop/>
            default:
                return null;
        }
    }, [tab])

    const handleDownloadJsonFile = useCallback(() => {
        alert("TODO: add download functionality")
    }, [])

    const handleCloseModal = useCallback(() => {
        dispatch(AppSliceActions.closeModal());
        dispatch(objectDetailsModalSliceActions.resetState());
    }, [dispatch])

    if (!objectData) return <>Loading...</>

    return <Modal
        open={isOpen}
        onClose={handleCloseModal}
        className={styles.modal}
    >
        <div className={styles.box}>
            <div className={styles.titleBar}>
                <Typography variant="h5" component="h2">
                    Object details: {objectData.name}
                </Typography>
                <DownloadObjectButton/>
            </div>
            <Tabs value={tab} className={styles.tabs} variant="fullWidth">
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