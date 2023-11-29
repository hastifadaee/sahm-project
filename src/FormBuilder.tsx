import {Box, Container, Grid, GridProps, MenuItemProps, SelectProps, TextFieldProps} from "@mui/material";
import {UseControllerProps} from "react-hook-form/dist/types";
import CostumeTextField from "./CostumeTextField";
import CostumeSelect from "./CostumeSelect";
import {useForm} from "react-hook-form";

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
type FormBuilder = {
    controlOptions: UseControllerProps,
    gridOptions: GridProps
} & (SelectOptions | TextOptions)
const FormBuilder = ({Form}: { Form: FormBuilder[] }) => {
    const {control} = useForm()
    // const getFields = (item : FormBuilder)=>{
    //     // @ts-ignore
    //     // const Fields ={
    //     //     'text':<CostumeTextField TextFieldProps={item.inputOptions} ControlProps={item.controlOptions}/>,
    //     //     'select':<Select/>
    //     // }
    //     return Fields[item.type]
    // }
    return (
        <Box component={'form'} mt={4}>
            <Container>
                <Grid container width={'100%'} rowGap={1} justifyContent={'space-between'}>
                    {
                        Form.map((item, index) => {
                            item.controlOptions = {...item.controlOptions, control: control}
                            if (item.type === 'text') {
                                return <CostumeTextField key={index} GridProps={item.gridOptions}
                                                         TextFieldProps={item.inputOptions}
                                                         ControlProps={item.controlOptions}/>
                            } else if (item.type === 'select') {
                                return <CostumeSelect key={index} Options={item.options} MenuOptions={item.menuOptions}
                                                      SelectProps={item.inputOptions} GridProps={item.gridOptions}
                                                      ControlProps={item.controlOptions}/>
                            }
                            // return getFields(item)
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}
export default FormBuilder;