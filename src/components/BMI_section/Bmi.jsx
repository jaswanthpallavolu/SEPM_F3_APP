import React from 'react'
import { useOurContext } from '../../Context/Context'
export default function Bmi() {
    const { bmi_section } = useOurContext();
    const { name1 } = bmi_section;
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>{name1}</h1>
        </div>
    )
}
