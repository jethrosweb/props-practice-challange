import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke 
                setup="1. I bought a thesaurus today and when I got it home I found out all the pages were blank."
                punchline="I have no words to describe how annoyed I am."
                upvotes={2}
                downvotes={3}
                comments={["lame, great"]}
                isPun={false}
            />
            <Joke 
                setup="2. I went to a really emotional wedding the other day."
                punchline="Even the cake was in tiers."
                upvotes={4}
                downvotes={5}
                comments={["lame, great"]}
                isPun={true}
            />
            <Joke 
                setup="3. Did you hear about the ATM that got addicted to money?"
                punchline="It suffered from withdrawals."
                upvotes={2}
                downvotes={1}
                comments={["lame, great"]}
                isPun={true}
            />
            <Joke 
                punchline="4. Never trust atoms, they make up everything."
                upvotes={12}
                downvotes={3}
                comments={["lame, great"]}
                isPun={true}
            />
        </div>

    )
}