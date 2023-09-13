import styles from './styles/NewEventForm.module.css'
import {useState} from "react";

export default function NewEventForm () {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')

    return (
        <form className={ styles.newEventForm }>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={ (e) => { setTitle(e.target.value) } } />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={ (e) => { setDate(e.target.value) } } />
            </label>
            <button>Submit</button>
            <p>Title - { title } | Date: { date }</p>
        </form>
    );
}
