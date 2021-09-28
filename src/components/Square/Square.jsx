import React, { useEffect, useState} from "react";

import './Square.css'

const Square = (props) => {

    const [state, setState] = useState(null)

    return(
        <button className="square" onClick={() => {
            setState('X')
        }}>
            {state}
        </button>
    )
}

export default Square