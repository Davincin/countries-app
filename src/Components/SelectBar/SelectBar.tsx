import React from 'react';
import Select from 'react-select'
import './SelectBar.css'

const options = [
    {value: "AF", label: "Afryka"},
    {value: "SA", label: "Ameryka południowa"},
    {value: "NA", label: "Ameryka północna"},
    {value: "AN", label: "Antarktyda"},
    {value: "OC", label: "Australia"},
    {value: "AS", label: "Azja"},
    {value: "EU", label: "Europa"},
    {value: "", label: "Wszystkie"},
]

interface Props {
    onChange: ((e: any) => void)
}

const SelectBar: React.FC<Props> = ({onChange}) => {
    
    return (
        <div className="selectbar">
            <label className="selectbar__label" htmlFor="select">Wybierz kontynent</label>
            <Select options={options} defaultValue={options[7]} name="select" className="selectbar__select" onChange={onChange}/>
        </div>
    );
}
 
export default SelectBar;