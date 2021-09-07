import React, { createContext, useContext, useState } from 'react'

const ourContext = createContext();
export const useOurContext = () => {
    return useContext(ourContext);
}
export function ContextProvider({ children }) {
    //LANDING PAGE SECTION
    const [title, setTitle] = useState('F3 Web App');
    const val = { title, setTitle }

    //----BMI SECTION----
    const [name1, setName1] = useState('this is BMI section');
    const val1 = { name1, setName1 }

    //----CALORIE CALC SECTION----
    const [name2, setName2] = useState('');
    const val2 = { name2, setName2 }


    //----DIET AND NUTRITION SECTION----
    const [name3, setName3] = useState('');
    const val3 = { name3, setName3 }

    //----FITNESS----
    const [name4, setName4] = useState('');
    const val4 = { name4, setName4 }

    return (
        <ourContext.Provider
            value={{
                landing: val,
                bmi_section: val1,
                cal_section: val2,
                diet_section: val3,
                fit_section: val4
            }}>
            {children}
        </ourContext.Provider>
    )
}

