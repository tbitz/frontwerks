import React, {useState} from 'react';

function LogRocketF() {
    const [count, setCount] = React.useState(1);
    useEffect(() => {
        const subscription = props.source.subscribe();
        return () => {
            // Clean up the subscription
            subscription.unsubscribe();
        };
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() =>
                setCount(count + 1)}
            >Increase</button>
        </div>
    );
}
