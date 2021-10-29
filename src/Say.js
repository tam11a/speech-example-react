import React from 'react';
import { SayButton } from 'react-say';

export default function Say({text}) {
    
    return (
        <SayButton
            onClick={ event => console.log(event) }
            text={text}
        >
            {text}
        </SayButton>
    )
}
