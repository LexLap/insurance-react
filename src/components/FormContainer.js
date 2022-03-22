import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { submitForm } from '../server/FormManager';
import CheckboxInput from './FormShards/CheckboxInput';
import TextInput from './FormShards/TextInput';
import ToggleInput from './FormShards/ToggleInput';

const FormContainer = (props) => {
    const { filledFormData } = useContext(FormContext)

    const handleElementType = (elementData) => {
        switch (elementData.type) {
            case "text":
                return <TextInput key={elementData.elementId} {...elementData} />
            case "toggle":
                return <ToggleInput key={elementData.elementId} {...elementData} />
            case "checkbox":
                return <CheckboxInput key={elementData.elementId} {...elementData} />
            default:
                return <div></div>
        }
    }


    const handlePressToSubmit = async () => {
        let validAge = false
        let validZip = false

        filledFormData.forEach(element => {
            if (element?.title === 'Your Age') validAge = true
            if (element?.title === 'Enter Your Zip Code') validZip = true
        });

        if (validZip && validAge)
            submitForm(filledFormData).then(data => {
                if (data)
                    props.setQuotesData(data)
            })
        else alert("Form is not valid for submitting!")
    }


    return (
        <div id='form-container'>

            {
                props.formData.map(element => {
                    return handleElementType(element)
                })
            }


            <div className="button-container"
                onClick={handlePressToSubmit}
            >
                GET QUOTES
            </div>

        </div>
    );
};

export default FormContainer;