import styles from './styles/NewEventForm.module.css'

export default function NewEventForm () {
    return (
        <>
            <form className={ styles.newEventForm }>
                <label>
                    <span>Event Title:</span>
                    <input type="text"/>
                </label>
                <label>
                    <span>Event Date:</span>
                    <input type="date"/>
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}
