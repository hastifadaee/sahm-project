import {Grid, TextField, TextFieldProps, GridProps} from "@mui/material";
import {useController} from "react-hook-form";
import {FieldValues, UseControllerProps, UseFormReturn} from "react-hook-form/dist/types";

const CostumeTextField = ({
                              TextFieldProps,
                              ControlProps,
                              GridProps,
                              UseFormReturn
                          }: { TextFieldProps: TextFieldProps, ControlProps: UseControllerProps, GridProps: GridProps  ,UseFormReturn: UseFormReturn<FieldValues, any, undefined>}) => {
    const {field, fieldState} = useController({...ControlProps , control:UseFormReturn.control})
    return (
        <Grid item {...GridProps}>
            <TextField type={'text'} error={!!fieldState.error?.message} value={field.value ?? ''}
                       onChange={field.onChange} {...TextFieldProps}/>
        </Grid>
    )
}
export default CostumeTextField;