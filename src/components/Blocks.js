/**
 * @Description Blocks Component
 * @author Shy
 * @date 13.10.2022
 */

import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'
import Filler from './Filler'
import Levitation from './Levitation'

export default function Blocks ({ id, color, min: minRanged, max: maxRanged, description }) {
    /* min range and max range to limit a ranged slider */
    const [minVal, setMinVal] = useState(minRanged)
    const [maxVal, setMaxVal] = useState(maxRanged)
    
    /* distance between two slider buttons */
    const range = 3
    
    /* set some limitation for button, just slide within the range */
    const minHandler = (e) => {
        if (e.target.value < minRanged) setMinVal(minRanged)
        else if ((e.target.value > parseInt(maxVal) - parseInt(range)))
            setMinVal(parseInt(maxVal) - parseInt(range))
        else setMinVal(e.target.value)
    }
    
    const maxHandler = (e) => {
        if (e.target.value > maxRanged) setMaxVal(maxRanged)
        else if ((e.target.value < parseInt(minVal) + parseInt(range)))
            setMaxVal(parseInt(minVal) + parseInt(range))
        else setMaxVal(e.target.value)
    }
    
    return (
        <div className="group">
            {/* smaller input button */}
            <StyledInput type="range"
                         color={color}
                         min={0} max={100}
                         value={minVal}
                         onChange={e => minHandler(e)}
            />
            <div className="relative mx-auto h-full w-[99%]">
                {/* filler between the button */}
                <Filler color={color} min={minVal} max={maxVal} />
                {/* display current state above when hover */}
                <Levitation mid={(parseInt(maxVal) + parseInt(minVal)) / 2}
                            color={color}
                            description={description}
                />
            </div>
            
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
/* styles for slider thumb */
const StyledSliderThumb = styled.input`
    ::-webkit-slider-thumb {
        background: ${props => props.color};
        width: 19px;
        height: 19px;
        border: 1px solid #e5e7eb;
        border-radius: 50%;
        pointer-events: auto;
        -webkit-appearance: none;
    }

    ::-moz-range-thumb {
        background: ${props => props.color};
        width: 19px;
        height: 19px;
        border-radius: 50%;
        pointer-events: auto;
        -moz-appearance: none;
    }
`

const StyledInput = tw(StyledSliderThumb)`
    absolute
    h-3
    w-full
    pointer-events-none
    bg-transparent
    appearance-none
    z-10
`

/**
 * End of Blocks Component
 */