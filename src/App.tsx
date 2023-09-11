import { useState } from 'react';
import './App.css'

function App() {
    const [name, setName] = useState( 'Mario' )

    const handcleClick = () => {
        setName('Luigi')
    }

    return (
        <>
            <div className={ 'App' }>
                <h1>My name is { name }</h1>
                <button onClick={ handcleClick }>Change Name</button>
            </div>
        </>
    )
}

export default App
