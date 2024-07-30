import React from 'react';
import './MySelect.module.css';

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}>
            <option value="1">{defaultValue}</option>
            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )
            }
        </select>
    );
};

export default MySelect;