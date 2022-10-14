/**
 * @Description Filling Component
 * @author Shy
 * @date 13.10.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

export default function Filling ({ color, min, max }) {
    return (
        <Progress style={{backgroundColor:color, left:`${min}%`, right:`${100-max}%`}} />
    )
}

const Progress = tw.div`
    absolute
    h-2
    rounded-md
`
/**
 * End of Filling Component
 */