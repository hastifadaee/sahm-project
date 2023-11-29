import {UseControllerProps} from "react-hook-form/dist/types";
import {SelectProps, GridProps, Grid, Select, MenuItem, MenuItemProps} from "@mui/material";
import {useController} from "react-hook-form";

const CostumeSelect = ({
                           SelectProps,
                           GridProps,
                           ControlProps,
                           MenuOptions,
                           Options
                       }: { SelectProps: SelectProps, GridProps: GridProps, ControlProps: UseControllerProps, MenuOptions: MenuItemProps, Options: string[] }) => {
    const {field, fieldState} = useController({...ControlProps})
    return (
        <Grid {...GridProps}>
            <Select {...SelectProps} onChange={field.onChange} value={field.value}>
                {
                    Options.map((item) => {
                        return (
                            <MenuItem key={item} {...MenuOptions} value={item}>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </Grid>
    )
}
export default CostumeSelect;