import { useState } from 'react';
import './App.css'
import Title from "./components/Title.tsx";
import Modal from "./components/Modal.tsx";
import EventList from "./components/EventList.tsx";


function App() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showEvents, setShowEvents] = useState<boolean>(true)
    const [events, setEvents] = useState<any>([
        { title: "Mario's Birthday Bash", id: 1 },
        { title: "Bowser's Live Stream", id: 2 },
        { title: "Race on Moo Moo Farm", id: 3 }
    ])

    const handleClick = ( id: number ) => {
        setEvents( (prevEvents: any) => {
            return prevEvents.filter( (event: any) => {
                return id !== event.id
            })
        })
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const subtitle: string = "All the latest events in Marioland"
    const title: string = "Events in your Area"

    return (
        <>
            <div className={ 'App' }>
                <Title title={ title } subtitle={ subtitle } />
                {
                    showEvents && (
                        <div>
                            <button onClick={ () => setShowEvents(false) }>Hide Events</button>
                        </div>
                    )
                }
                {
                    !showEvents && (
                        <div>
                            <button onClick={ () => setShowEvents(true) }>Show Events</button>
                        </div>)
                }
                {
                    showEvents && <EventList events={ events } handleClick={ handleClick } />
                }
                { showModal &&
                    <Modal handleClose={ handleClose } isSalesModal={ true }>
                        <h2>10% Off Coupon Code!!</h2>
                        <p>Use the code NINJA10 at the checkout.</p>
                    </Modal>
                }
                <div>
                    <button onClick={ () => setShowModal(true) }>Show Modal</button>
                </div>

            </div>
        </>
    )
}

export default App
