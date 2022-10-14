/**
 * @Description Slider Component
 * @author Shy
 * @date 13.10.2022
 */

import React from 'react'
import Axis from './Axis'
import Blocks from './Blocks'

export default function Slider () {
    const color = {
        cyan300 : '#67e8f9',
        sky400 : "#38bdf8",
        violet300 : "#c4b5fd",
        orange200 : "#fed7aa",
    }
    
    return (
        <div className="h-full w-full p-8 flex  flex-col justify-center items-center">
            <Axis>
                <Blocks color={color.cyan300} min={0} max={30} />
                <Blocks color={color.sky400} min={33} max={62} />
                <Blocks color={color.orange200} min={65} max={77} />
                <Blocks color={color.violet300} min={80} max={100} />
            </Axis>
        </div>
    )
}
/**
 * End of Slider Component
 */