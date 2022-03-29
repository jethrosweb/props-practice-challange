import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <p>{props.setup}</p>}
            <p className="joke--punchline">{props.punchline}</p>
        </div>
    )
}