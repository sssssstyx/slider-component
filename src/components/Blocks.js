/**
 * @Description Blocks Component
 * @author Shy
 * @date 13.10.2022
 */

import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'
import Filling from './Filling'

export default function Blocks ({ color, min, max }) {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const range = 5
    
    const minHandler = (e) => {
        if(e.target.value< min) setMinVal(min)
        else if((e.target.value > parseInt(maxVal) - parseInt(range)))
            setMinVal( parseInt(maxVal) - parseInt(range))
        else setMinVal(e.target.value)
    }
    
    const maxHandler = (e) => {
        if(e.target.value > max) setMaxVal(max)
        else if((e.target.value < parseInt(minVal) + parseInt(range)))
            setMaxVal(parseInt(minVal) + parseInt(range))
        else setMaxVal(e.target.value)
    }
    
    return (
        <div >
            {/* smaller input button */}
            <StyledInput type="range"
                         color={color}
                         min={0} max={100}
                         value={minVal}
                         onChange={e => minHandler(e)}
            />
            <Filling color={color} min={minVal} max={maxVal}/>
            {/* larger input button */}
            <StyledInput type="range"
                         color={color}
                         min={0} max={100}
                         value={maxVal}
                         onChange={e => maxHandler(e)}
            />
        </div>
    )
}

const StyledSliderThumb = styled.input`
    ::-webkit-slider-thumb{
        background: ${props => props.color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        pointer-events: auto;
        -webkit-appearance: none;
    }
    ::-moz-range-thumb{
        background: ${props => props.color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        pointer-events: auto;
        -moz-appearance: none;
    }
`

const StyledInput = tw(StyledSliderThumb)`
    absolute
    h-2
    w-full
    pointer-events-none
    bg-transparent
    appearance-none
    z-10
`

/**
 * End of Blocks Component
 */