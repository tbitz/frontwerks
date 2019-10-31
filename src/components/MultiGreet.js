import React, {useState} from 'react';

export function MultiGreet({peopleProps}) {
    const [peopleState, setPeopleState] = useState(peopleProps);

    const deletePerson = id => {
        // props are immutable
        peopleProps = peopleProps.filter(p => p.id != id)

        // states are mutable
        setPeopleState(peopleState.filter(p => p.id != id));
    }

    return (
        <div>
            <h1>Greeting my people's</h1>

            {/* need to use state to rerender */}
            {peopleState.map( p => (
                <p onClick={() => deletePerson(p.id)} key={p.id}> Greet: Hello - {p.name} ({p.id}) </p>
            ))}
        </div>
    )
}
