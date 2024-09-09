import React, { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(e){
        setColor(e.target.value);
    }

return (
    <div>
        <h1>Color Picker</h1>
        <div className="color-display" style={{background: color}}>
            <h2>Selected Color:</h2>
            <h3>{color}</h3>
        </div>
        <div className="select-color-container">
            <label htmlFor="color">Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </div>
)
}

export default ColorPicker;