import React, { useState } from 'react'

const white = 'https://www.seekpng.com/png/detail/672-6727141_light-bulb-off.png'
const yellow = 'https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png'

const Lightbulb = () => {
    const [lightOn, setLightOn] = useState(false)

    return (
        <div className='container' >
            {lightOn ? <img width={'25px'} src={yellow} /> : <img width={'50px'} src={white} />}
            <button onClick={() => {setLightOn(!lightOn)}} >Lightswitch</button>
        </div>
    )
}


module.exports = Lightbulb