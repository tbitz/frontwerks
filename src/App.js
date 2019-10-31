import React from 'react';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import {ClassComponent} from "./components/ClassComponent";
import { FunctionalComponent } from "./components/FunctionalComponent";
import {Greet} from "./components/Greet";
import {MultiGreet} from "./components/MultiGreet";
import {StateClass} from "./components/StateClass";
import StateFunction from "./components/StateFunction";

function App() {
    const people = [
        {
            id: 0,
            name: 'Marta'
        },
        {
            id: 1,
            name: 'Emilia'
        },
        {
            id: 2,
            name: 'Gio'
        }
    ]
    return (
        <div className="App">
            <header className="App-header">

                <StateFunction hungryGuy="Jim"/>
{/*
                 work with states
                <StateClass hungryGuy="Jim" />

                pass props-array to child
                <MultiGreet peopleProps={people}/>

                Greet one person
                <Greet name="Bruce"/>


                <ClassComponent name="Bruce">Content between tags in App.js</ClassComponent>


                <FunctionalComponent/>


                <ParentComponent/>*/}
            </header>
        </div>
    );
}

export default App;
