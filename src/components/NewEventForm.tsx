import styles from './styles/NewEventForm.module.css'
import {useState} from "react";

export default function NewEventForm () {
    const [title, setTitle] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    return (
        <form className={ styles.newEventForm }>
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
            <p>Title - { title } | Date: { date }</p>
            <p onClick={ resetForm }>Reset the form</p>
        </form>
    );
}
