import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select, Slider, TextField,
    Typography
} from "@mui/material";
import {Formik} from "formik";
import {formikInitialValues} from "./AddNewDropForm.const.ts";
import styles from './AddNewDropForm.module.scss';
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import Button from "@mui/material/Button";

export const AddNewDropForm = () => {
    return <div>
        <Typography variant="h6" className={styles.title}>Add new drop</Typography>
        <Formik initialValues={formikInitialValues} onSubmit={v => alert('TODO')}>
            {({values, handleChange, setFieldValue, setValues}) => <FormGroup className={styles.form}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Object Id</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Object Id"
                        name="objectId"
                        value={values.objectId}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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

                <Button variant="contained" color="success">Add drop</Button>
            </FormGroup>}
        </Formik>
    </div>
}