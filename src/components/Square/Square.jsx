import React from "react";

import './Square.css'

const Square = ({value, onClick}) => {

    // const [value, setValue] = useState(null)

    return(
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square