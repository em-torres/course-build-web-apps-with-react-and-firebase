import styles from './styles/NewEventForm.module.css'
import { useState } from "react";
import EventProps from "./models/EventPropsModel.tsx";
import INewEventProp from "./interfaces/INewEventProps.tsx";

export default function NewEventForm ( { addEvent }: INewEventProp) {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [location, setLocation] = useState<string>( 'manchester' )

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('manchester')
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const event: EventProps = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000),
            location: location
        }
        addEvent(event)
        resetForm()
    }

    return (
        <form className={ styles.newEventForm } onSubmit={ handleSubmit }>
            <label>
                <span>Event Title:</span>
                <input
                    type="text"
                    value={ title }
                    onChange={ (e) => { setTitle(e.target.value) } }
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    value={ date }
                    onChange={ (e) => { setDate(e.target.value) } }
                />
            </label>
            <label>
                <span>Event Location:</span>
                <select onChange={ (e) => setLocation( e.target.value ) }>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    );
}
