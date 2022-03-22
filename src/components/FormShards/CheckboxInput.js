import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { FormContext } from '../../context/FormContext';

const CheckboxInput = (props) => {

    const { filledFormData, setFilledFormData } = useContext(FormContext)
    const [checkboxesValues, setCheckBoxesValues] = useState(
        props.options.map(() => { return false })
    )

    const handleCheckboxInput = (event) => {
        const boxesValues = checkboxesValues
        boxesValues[event.target.value] = !boxesValues[event.target.value]
        setCheckBoxesValues(boxesValues)

        const newData = [...filledFormData]
        newData[props.elementId] = {
            ...props,
            data: boxesValues
        }
        setFilledFormData(newData)
    }

    return (
        <div className='checkbox-input-container'>

            {
                props.options.map((element, i) => {
                    return <div className='checkbox-wrapper'
                        key={element + i}
                    >
                        <input type="checkbox" id={element} value={i}
                            onChange={(event) => { handleCheckboxInput(event) }}
                        />

                        <label htmlFor={element}>{element}</label>

                    </div>
                })
            }

        </div>
    );
};

export default CheckboxInput;