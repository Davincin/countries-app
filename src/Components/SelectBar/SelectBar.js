import Select from 'react-select'
import './SelectBar.css'

const options = [
    {value: "AF", label: "Afryka"},
    {value: "SA", label: "Ameryka południowa"},
    {value: "NA", label: "Ameryka północna"},
    {value: "OC", label: "Australia"},
    {value: "AS", label: "Azja"},
    {value: "EU", label: "Europa"},
    {value: "", label: "Wszystkie"},
]

const SelectBar = props => {
    
    
    
    const handleSelectChange = e => {
        console.log(Select.value)
    }
    
    return (
        <div className="selectbar">
            <label className="selectbar__label" htmlFor="select">Wybierz kontynent</label>
            <Select options={options} defaultValue={options[6]} name="select" className="selectbar__select" onChange={props.onChange}/>
        </div>
    );
}
 
export default SelectBar;