import React, {useState, useMemo, useEffect} from 'react';

// stateless functional component
export default function StateFunction( {hungryGuy} ) {
    const fruitObject = {
        name: 'Apple',
        supply: 3
    }

    const [a, setA] = useState(2);
    const [fruit, setFruit] = useState(fruitObject);
    const [message, setMessage] = useState('Are you hungry?');
    const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);

    useEffect(() => {
        return () => {
            console.log('useEffect without second parameter ' +a)
            document.title = a.toString();
        };
    }, [a]);

    useEffect(() => {
        return () => {
            console.log('run once')
        };
    }, []);

    function computeExpensiveValue(a) {
        let b = 0;
        for (let i = 0; i < 100000; i++) {
            b += Math.sqrt(111) * (Math.sqrt(Math.PI) * Math.random() * Math.exp(a) / Math.sqrt(Math.PI))
        }
        return Math.floor(b);
    }

    function eat(hungryGuy) {
        setFruit({
            name: fruit.name,
            supply: --fruit.supply
        })
        if (fruit.supply <= 0) {
            setA(10);
            console.log(a)
            setMessage(`${hungryGuy} ate all the ${fruit.name}s`);
        } else {
            setMessage(`${hungryGuy} eats an ${fruit.name}. ${fruit.supply} left.`);
        }

    }

    if (fruit.supply <= 0) {
        return (
            <div>
                <h1>StateFunction:</h1>
                <p>{message} </p>
                <p>Memoized Value: {memoizedValue}</p>
                <p>This is a: {a}</p>

            </div>
        )
    } else {
        return (
            <div>
                <h1>StateFunction:</h1>
                <p>{message} </p>
                <button onClick={() => eat(hungryGuy)}>
                    Yes, eat an {fruit.name} ({fruit.supply})
                </button>
                <p>Memoized Value: {memoizedValue}</p>
                <p>a is: {a}</p>


            </div>
        )
    }
}
