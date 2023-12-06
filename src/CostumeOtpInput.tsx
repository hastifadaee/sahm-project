import {useController} from "react-hook-form";
import {FieldValues, UseControllerProps, UseFormReturn} from "react-hook-form/dist/types";
import {MuiOtpInput, MuiOtpInputProps} from "mui-one-time-password-input";

const CostumeOtpInput = ({MuiOtpProps , ControlProps , UseFormReturn}:{MuiOtpProps : MuiOtpInputProps , ControlProps : UseControllerProps , UseFormReturn: UseFormReturn<FieldValues, any, undefined> })=>{
    const {field , fieldState} = useController({...ControlProps ,control:UseFormReturn.control})
    return (
        <MuiOtpInput {...MuiOtpProps} value={field.value} onChange={field.onChange} />
    )
}
export default CostumeOtpInput;