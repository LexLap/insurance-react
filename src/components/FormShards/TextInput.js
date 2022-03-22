import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const TextInput = (props) => {

    const { filledFormData, setFilledFormData } = useContext(FormContext)

    const onBlurZipInput = (event) => {
        const newZip = event.target.value.trim();
        const regex = /\d+/g

        if (newZip.length >= 5 && regex.test(newZip)) {
            const newData = [...filledFormData]
            newData[props.elementId] = { ...props, data: newZip }
            setFilledFormData(newData)
        } else alert('Invalid ZIP!')
    };

    return (
        <div className='text-input-container'>
            <input
                placeholder={props.title}
                onBlur={onBlurZipInput}
            ></input>
        </div>
    );
};

export default TextInput;