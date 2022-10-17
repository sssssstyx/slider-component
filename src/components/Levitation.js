/**
 * @Description Levitation Component
 * @author Shy
 * @date 16.10.2022
 */

import React, { useLayoutEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export default function Levitation ({ mid, color, description }) {
    /* Get DOM element */
    const ref = useRef(null);
    /* store element width */
    const [width, setWidth] = useState(0)
    
    /* this triggers synchronously after all DOM mutations */
    useLayoutEffect(() => {
        /* clientWidth returns width with padding but without margin in px */
        setWidth(ref.current.offsetWidth);
        /* get current element's width when rendering */
    }, [])
    
    return (
        <StyledLevitation ref={ref}
                          className="before:content-[' '] "
                          color={color}
                          style={{backgroundColor: color, left: `calc(${mid}% - ${width / 2}px`}}
        >
            {description}
        </StyledLevitation>
    )
}

const ArrowBefore = styled.div`
    ::before {
        border-top-color: ${props => props.color};
    }
`

const StyledLevitation = tw(ArrowBefore)`
    absolute
    -top-16
    p-1 px-3 rounded-md
    text-lg text-center whitespace-nowrap
    scale-0 group-hover:scale-100 transition-all duration-100 origin-bottom ease-linear
    cursor-default
    before:absolute before:border-t-8 before:border-x-transparent
    before:border-x-[10px] before:left-1/2 before:-bottom-2 before:-ml-2.5
    before:pointer-events-none
`
/**
 * End of Levitation Component
 */