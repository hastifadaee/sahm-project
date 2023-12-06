import {useController} from "react-hook-form";
import {Grid, TextField, TextFieldProps, GridProps, InputAdornment} from "@mui/material";
import {FieldValues, UseControllerProps, UseFormReturn} from "react-hook-form/dist/types";

const PhoneNumberTextField = ({
                                  TextFieldProps,
                                  ControlProps,
                                  GridProps,
                                  UseFormReturn
                              }: { TextFieldProps: TextFieldProps, ControlProps: UseControllerProps, GridProps: GridProps ,UseFormReturn: UseFormReturn<FieldValues, any, undefined> }) => {
    const {field, fieldState} = useController({...ControlProps, control:UseFormReturn.control , rules:{required: true , minLength:10 , maxLength:10}})
    return (
        <Grid item {...GridProps}>
            <TextField InputProps={{startAdornment: <InputAdornment position="start">+98</InputAdornment>}}
                       error={!!fieldState.error?.message} type={'tel'} value={field.value ??''}
                        onChange={(e)=>{
                            if((e.target.value.match(/^\d+$/) && e.target.value[0] === '9') || e.target.value === ''){
                                field.onChange(e)
                            }
                            // field.onChange(e)
                        }}
                        // onChange={field.onChange}
                       {...TextFieldProps} />
        </Grid>
    )
}
export default PhoneNumberTextField;