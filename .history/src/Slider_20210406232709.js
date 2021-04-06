import React from 'react'

export default function Slider({min, max, value}) {
    return (
        <div className="slider-container">
            <input type="range" className="slider"/>
        </div>
    )
}
