/**
 * @Description Filler Component
 * @author Shy
 * @date 13.10.2022
 */

import React from 'react'

export default function Filler ({ color, min, max }) {
    return (
        <div className="absolute h-3 rounded-md"
             color={color}
             style={{backgroundColor: color, left: `${min}%`, right: `${100 - max}%`}}
        />
    )
}
/**
 * End of Filler Component
 */