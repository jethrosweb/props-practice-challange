import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <p>{props.setup}</p>}
            <p className="joke--punchline">{props.punchline}</p>
            <p>{props.upvotes}</p>
            <p>{props.downvotes}</p>
            <p>{props.comments}</p>
            <p>{props.isPun}</p>
        </div>
    )
}