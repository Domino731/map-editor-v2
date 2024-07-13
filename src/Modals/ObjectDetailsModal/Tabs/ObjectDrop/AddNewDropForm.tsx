import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select, Slider,
    Typography
} from "@mui/material";
import {Formik} from "formik";
import {formikInitialValues} from "./AddNewDropForm.const.ts";
import styles from './AddNewDropForm.module.scss';
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {FormikFormData} from "./AddNewDropForm.types.ts";
import {objectDetailsModalSliceActions} from "../../store.ts";
import {generateUUID} from "../../../../utils/string.ts";
import {AllItems} from "../../../../const/allItems.ts";

export const AddNewDropForm = () => {
    const dispatch = useDispatch();

    const handleAddDrop = useCallback((formikValues: FormikFormData) => {
        dispatch(objectDetailsModalSliceActions.addDrop({
            uuid: generateUUID(),
            id: formikValues.itemId,
            chance: formikValues.chance,
            amount: formikValues.amount
        }))
    }, [dispatch])

    return <div>
        <Typography variant="h6" className={styles.title}>Add new drop</Typography>
        <Formik initialValues={formikInitialValues} onSubmit={handleAddDrop}>
            {({values, handleChange, setValues, handleSubmit}) => <FormGroup
                className={styles.form}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Item Id</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Item Id"
                        name="itemId"
                        value={values.itemId}
                        onChange={handleChange}
                    >
                        {AllItems.map(({id, name}) => <MenuItem key={`add-new-drop-form-item-id-${id}`}
                                                                value={id}>{name}</MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl>
                    <Typography gutterBottom>Drop change</Typography>
                    <Slider
                        sx={{marginTop: '28px'}}
                        value={values.chance}
                        name="chance"
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        disableSwap
                    />
                    <FormControlLabel
                        control={<Checkbox checked={values.isChanceRange} name="isChanceRange" onChange={() => {
                            if (values.isChanceRange) {
                                setValues({
                                    ...values,
                                    isChanceRange: false,
                                    chance: 0
                                })
                            } else {
                                setValues({
                                    ...values,
                                    isChanceRange: true,
                                    chance: [0, 100]
                                })
                            }
                        }}/>}
                        label="Is drop chance in range"/>
                </FormControl>

                <FormControl>
                    <Typography gutterBottom>Drop amount</Typography>
                    <Slider
                        sx={{marginTop: '28px'}}
                        value={values.amount}
                        name="amount"
                        onChange={handleChange}
                        valueLabelDisplay="on"
                        disableSwap
                    />
                    <FormControlLabel
                        control={<Checkbox checked={values.isAmountRange} name="isAmountRange" onChange={() => {
                            if (values.isAmountRange) {
                                setValues({
                                    ...values,
                                    isAmountRange: false,
                                    amount: 0
                                })
                            } else {
                                setValues({
                                    ...values,
                                    isAmountRange: true,
                                    amount: [0, 100]
                                })
                            }
                        }}/>}
                        label="Is drop amount in range"/>
                </FormControl>

                <Button onClick={handleSubmit} type="submit" variant="contained" color="success">Add drop</Button>
            </FormGroup>}
        </Formik>
    </div>
}