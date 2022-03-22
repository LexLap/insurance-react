import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { FormContext } from '../../context/FormContext';

const ToggleInput = (props) => {

    const { filledFormData, setFilledFormData } = useContext(FormContext)
    const [activeToggle, setActiveToggle] = useState(null)

    const handleToggleInput = (event) => {
        setActiveToggle(event.target.id)
        const newData = [...filledFormData]
        newData[props.elementId] = { ...props, data: event.target.id }
        setFilledFormData(newData)
    }

    return (
        <div>
            Your Age
            <div className='toggle-input-container'>

                {
                    props.options.map((element, i) => {
                        return <div
                            onClick={(event) => { handleToggleInput(event) }}
                            className={i + '' === activeToggle ? 'toggle-tile active' : 'toggle-tile'}
                            key={element + i} id={i} >
                            {element}
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default ToggleInput;