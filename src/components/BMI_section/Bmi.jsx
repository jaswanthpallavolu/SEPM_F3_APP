import React from 'react'
import { useOurContext } from '../../Context/Context'
export default function Bmi() {
    const { bmi_section } = useOurContext();
    const { name1 } = bmi_section;
    return (
        <div>
            <h1>{name1}</h1>
            <h1>OK GOT IT</h1>
        </div>
    )
}
