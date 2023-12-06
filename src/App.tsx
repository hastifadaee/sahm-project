import FormBuilder from "./FormBuilder";
import {FormItem} from './FormBuilder'
import {useForm} from "react-hook-form";
import {Box} from "@mui/material";

function App() {
    const UseFormReturn = useForm({mode:"onChange" , reValidateMode:'onChange'});
    const Form: FormItem[] = [{
        type: 'text',
        inputOptions: {label: 'name', size: 'small', fullWidth: true},
        controlOptions: {name: 'name'},
        gridOptions: {item: true, xs: 5}
    }, {
        type: 'text',
        inputOptions: {label: 'family', size: 'small', fullWidth: true},
        controlOptions: {name: 'family'},
        gridOptions: {item: true, xs: 5}
    }, {
        type: 'select',
        inputOptions: {size: 'small', fullWidth: true},
        controlOptions: {name: 'select', defaultValue: 'surush'},
        gridOptions: {item: true, xs: 12},
        menuOptions: {},
        options: ['hasti', 'surush']
    }, {
        type: 'phone',
        inputOptions:{fullWidth: true},
        controlOptions: {name: 'num'},
        gridOptions: {xs: 12},
    },{
        type:'otp',
        controlOptions:{name:'otp', rules: {maxLength:1}},
        gridOptions:{xs:12 , item:true},
        otpInputOptions:{}
    }
    ]
    const onSubmit =()=>{
        console.log(UseFormReturn.getValues(),1)
    }
    return (
        <Box component={'form'} mt={4} onSubmit={UseFormReturn.handleSubmit(onSubmit)}>
            <FormBuilder UseFormReturn={UseFormReturn} Form={Form}/>
        </Box>
    );
}

export default App;
