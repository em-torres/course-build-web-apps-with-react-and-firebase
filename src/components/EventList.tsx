import styles from './styles/EventList.module.css'

export default function EventList({ events, handleClick }: any) {
    return (
        <div>
            {
                events.map((event: any, index: number) => (
                    <div key={ event.id } className={ styles.card }>
                        <h2>{index}. {event.title}</h2>
                        <button onClick={() => handleClick(event.id)}>Delete Event</button>
                    </div>
                ))
            }
        </div>
    )
}
