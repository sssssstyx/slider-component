/**
 * @Description Axis Component
 * @author Shy
 * @date 13.10.2022
 */

import React from 'react'

export default function Axis (props) {
    return (
        <div className="relative bg-stone-300 w-full h-2 rounded-xl">
            {props.children}
        </div>
    )
}
/**
 * End of Axis Component
 */