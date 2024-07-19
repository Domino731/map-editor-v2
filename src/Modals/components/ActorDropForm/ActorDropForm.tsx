import styles from './ActorDropForm.module.scss';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Typography
} from "@mui/material";
import {Formik} from "formik";
import {formikInitialValues} from "./ActorDropForm.const.ts";
import {AllItems} from "../../../const/items/allItems.ts";
import Button from "@mui/material/Button";
import {ActorDropFormikFormData} from "./ActorDropForm.types.ts";


interface ActorDropFormProps {
    onDropAdd: (v: ActorDropFormikFormData) => void;
}

export const ActorDropForm = ({onDropAdd}: ActorDropFormProps) => {
    return <div>
        <Typography variant="h6" className={styles.title}>Add new drop</Typography>
        <Formik initialValues={formikInitialValues} onSubmit={onDropAdd}>
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

                <Button onClick={() => handleSubmit()} type="submit" variant="contained" color="success">Add
                    drop</Button>
            </FormGroup>}
        </Formik>
    </div>
}