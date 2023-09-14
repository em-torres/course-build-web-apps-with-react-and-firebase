import styles from './styles/NewEventForm.module.css'
import { useState } from "react";
import EventProps from "./models/EventPropsModel.tsx";
import INewEventProp from "./interfaces/INewEventProps.tsx";

export default function NewEventForm ( { addEvent }: INewEventProp ) {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const event: EventProps = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
    }

    return (
        <form className={ styles.newEventForm } onSubmit={ handleSubmit }>
            <label>
                <span>Event Title:</span>
                <input type="text"
                       onChange={ (e) => { setTitle(e.target.value) } }
                       value={ title }
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date"
                       onChange={ (e) => { setDate(e.target.value) } }
                       value={ date }
                />
            </label>
            <button>Submit</button>
        </form>
    );
}
