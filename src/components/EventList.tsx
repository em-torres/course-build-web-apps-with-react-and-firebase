import styles from './styles/EventList.module.css'
import IEventListProps from "./interfaces/IEventListProps.tsx";
import EventProps from "./models/EventPropsModel.tsx";

export default function EventList({ events, handleClick }: IEventListProps) {
    return (
        <div>
            {
                events.map((event: EventProps, index: number) => (
                    <div key={ event.id } className={ styles.card }>
                        <p>{ event.date }</p>
                        <h2>{index}. {event.title}</h2>
                        <button onClick={() => handleClick( event.id )}>Delete Event</button>
                    </div>
                ))
            }
        </div>
    )
}
