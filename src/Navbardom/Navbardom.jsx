import React from 'react'
import Slayder1 from '../Slayder1/Slayder1'
import Slayder2 from '../Slayder2/Slayder2'
import Rasm1 from '../Rang1/Rang1'
import Slayder3 from '../Slayder3/Slayder3'
import Page4 from '../Page4/Page4'
import Vidio from '../Vidio/Vidio'
import Page5 from '../Page5/Page5'
function Navbardom() {
    return (

        <div className='Container'>

            <Slayder1 />
            <div className='Container2'>

                <Slayder2 />
                <Rasm1 />

            </div>
            <Slayder3 />
            <Page4 />
            <Vidio />
            <Page5 />

        </div>

    )
}

export default Navbardom