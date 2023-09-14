import { useState } from 'react';
import './App.css'
import Title from "./components/Title.tsx";
import Modal from "./components/Modal.tsx";
import EventList from "./components/EventList.tsx";
import NewEventForm from "./components/NewEventForm.tsx";
import EventProps from "./components/models/EventPropsModel.tsx";


function App() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showEvents, setShowEvents] = useState<boolean>(true)
    const [events, setEvents] = useState<EventProps[]>([])

    const addEvent = (event: EventProps) => {
        setEvents((prevEvents: EventProps[]) => {
            return [...prevEvents, event]
        })
        setShowModal(false)
    }
    const handleClick = ( id: number ) => {
        setEvents( (prevEvents: any) => {
            return prevEvents.filter( (event: any) => {
                return id !== event.id
            })
        })
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
                <div>
                    <button onClick={ () => setShowModal(true) }>Add New Event</button>
                </div>
                {
                    showEvents && <EventList events={ events } handleClick={ handleClick } />
                }
                { showModal &&
                    <Modal isSalesModal={ true }>
                        <NewEventForm addEvent={ addEvent } />
                    </Modal>
                }
            </div>
        </>
    )
}

export default App
