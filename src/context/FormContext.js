import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const [filledFormData, setFilledFormData] = useState([]);

    return (
        <FormContext.Provider value={{ filledFormData, setFilledFormData }}>
            {props.children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;