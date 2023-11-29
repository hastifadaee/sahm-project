import {Grid, TextField, TextFieldProps, GridProps} from "@mui/material";
import {useController} from "react-hook-form";
import {UseControllerProps} from "react-hook-form/dist/types";

const CostumeTextField = ({
                              TextFieldProps,
                              ControlProps,
                              GridProps
                          }: { TextFieldProps: TextFieldProps, ControlProps: UseControllerProps, GridProps: GridProps }) => {
    const {field, fieldState} = useController({...ControlProps})
    return (
        <Grid item {...GridProps}>
            <TextField error={!!fieldState.error?.message} value={field.value}
                       onChange={field.onChange} {...TextFieldProps}/>
        </Grid>
    )
}
export default CostumeTextField;