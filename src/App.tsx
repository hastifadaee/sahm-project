import FormBuilder from "./FormBuilder";

function App() {
    return (
            <FormBuilder Form={[{
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
                inputOptions: { size: 'small'},
                controlOptions: {name: 'select', defaultValue: 'surush'},
                gridOptions: {item: true, xs: 12},
                menuOptions: {},
                options: ['hasti', 'surush']
            }]}/>
    );
}

export default App;
