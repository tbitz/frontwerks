import React from 'react';
import ChildComponent from "./ChildComponent";

// stateless functional component
export default function ParentComponent() {

    return (
        <div>
            <h1>I am the parent</h1>
            <ChildComponent/>
        </div>
    )
}
