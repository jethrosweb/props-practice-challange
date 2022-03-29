import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return /*return not needed*/ <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

/*
Map Quiz:

1. What does the '.map()' array method do? 
A: Returns a new modified array (according to the function) from an existing array. Values are placed in the same index.  

2. What do we usually use '.map()' for in React? 
A: Convert an array of raw data into JSX elements that can be presented on the page. 

3. Why is using '.map()' better than just creating the components manually by typing them out? 
A: Means the code does not need to change when the raw data changes. 
*/