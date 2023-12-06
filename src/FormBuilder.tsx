import {
    Button,
    Container,
    Grid,
    GridProps,
    MenuItemProps,
    SelectProps,
    TextFieldProps,
} from "@mui/material";
import {
    FieldValues,
    UseControllerProps,
    UseFormReturn
} from "react-hook-form/dist/types";
import CostumeTextField from "./CostumeTextField";
import CostumeSelect from "./CostumeSelect";
import PhoneNumberTextField from "./PhoneNumberTextField";
import CostumeOtpInput from "./CostumeOtpInput";
import {MuiOtpInputProps} from "mui-one-time-password-input";

type TextOptions = {
    type: 'text',
    inputOptions: TextFieldProps
}
type SelectOptions = {
    type: 'select',
    inputOptions: SelectProps,
    menuOptions: MenuItemProps,
    options: string[]
}
type PhoneTextField = {
    type: 'phone',
    inputOptions: TextFieldProps,
}
type OtpInput = {
    type: 'otp',
    otpInputOptions : MuiOtpInputProps
}
type UseControlProps = Omit<UseControllerProps, 'control'>
export type FormItem = {
    controlOptions: UseControlProps,
    gridOptions: GridProps
} & (SelectOptions | TextOptions | PhoneTextField | OtpInput)
const FormBuilder = ({Form, UseFormReturn}: { Form: FormItem[], UseFormReturn: UseFormReturn<FieldValues, any, undefined> }) => {
    // const getFields = (item : FormBuilder)=>{
    //     // @ts-ignore
    //     // const Fields ={
    //     //     'text':<CostumeTextField TextFieldProps={item.inputOptions} ControlProps={item.controlOptions}/>,
    //     //     'select':<Select/>
    //     // }
    //     return Fields[item.type]
    // }
    return (
        <Container>
            <Grid container width={'100%'} rowGap={1} justifyContent={'space-between'}>
                {
                    Form.map((item, index) => {
                        if (item.type === 'text') {
                            return <CostumeTextField UseFormReturn={UseFormReturn} key={index} GridProps={item.gridOptions}
                                                     TextFieldProps={item.inputOptions}
                                                     ControlProps={item.controlOptions}/>
                        } else if (item.type === 'select') {
                            return <CostumeSelect UseFormReturn={UseFormReturn} key={index} Options={item.options}
                                                  MenuOptions={item.menuOptions}
                                                  SelectProps={item.inputOptions} GridProps={item.gridOptions}
                                                  ControlProps={item.controlOptions}/>
                        } else if (item.type === 'phone') {
                            return <PhoneNumberTextField key={index} UseFormReturn={UseFormReturn} TextFieldProps={item.inputOptions}
                                                         ControlProps={item.controlOptions}
                                                         GridProps={item.gridOptions}/>
                        }else if(item.type === 'otp'){
                            return <CostumeOtpInput key={index} UseFormReturn={UseFormReturn} MuiOtpProps={item.otpInputOptions} ControlProps={item.controlOptions}/>
                        }
                        // return getFields(item)
                    })
                }
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth={true} type={'submit'}>submit</Button>
            </Grid>
        </Container>
    )
}
export default FormBuilder;