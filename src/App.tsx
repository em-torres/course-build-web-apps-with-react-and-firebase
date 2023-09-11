import { useState } from 'react';
import './App.css'

function App() {
    const [name, setName] = useState( 'Mario' )
    const [events, setEvents] = useState([
        { title: "Mario's Birthday Bash", id: 1 },
        { title: "Bowser's Live Stream", id: 2 },
        { title: "Race on Moo Moo Farm", id: 3 },

    ])

    const handcleClick = () => {
        setName('Luigi')
    }

    return (
        <>
            <div className={ 'App' }>
                <h1>My name is { name }</h1>
                <button onClick={ handcleClick }>Change Name</button>
                {
                    events.map( (event, index) => (
                        <div key={ event.id }>
                            <h2>{ index }.+  { event.title }</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default App
