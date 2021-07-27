// Code Keypad Component Here
import React from 'react'

function Keypad() {

    const onChangeHandler = () => {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={onChangeHandler} />
        </div>
    )
}

export default Keypad
