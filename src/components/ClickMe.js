import React from 'react'
import { useState } from 'react'


function ClickMe() {
    const [text, setText] = useState("")
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
    setCounter(counter + text.length)
}

return (
    <div>
    <textarea className="text"
    onChange={(e) => setText(e.target.value)}
    placeholder="Type"
    value={text} />
    <button
    onClick={handleClick}
    className="btn"
    >
    Click Me
    </button>
    {counter}
    </div>
);
}

export default ClickMe;