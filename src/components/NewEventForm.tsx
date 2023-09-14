import styles from './styles/NewEventForm.module.css'
// import { useState } from "react";
import EventProps from "./models/EventPropsModel.tsx";
// import INewEventProp from "./interfaces/INewEventProps.tsx";
import {useRef} from "react";
import INewEventProp from "./interfaces/INewEventProps.tsx";

export default function NewEventForm ( { addEvent }: INewEventProp) {
    const title: any = useRef()
    const date: any = useRef()
    // const [title, setTitle] = useState<string>('')
    // const [date, setDate] = useState<string>('')

    const resetForm = () => {
        // setTitle('')
        // setDate('')
        title.current.value = ""
        date.current.value = ""
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const event: EventProps = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000)
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
                    ref={ title }
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    ref={ date }
                />
            </label>
            <button>Submit</button>
        </form>
    );
}
