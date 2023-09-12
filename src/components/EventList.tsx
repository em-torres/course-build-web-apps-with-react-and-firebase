import React from "react";

export default function EventList({ events, handleClick }: any) {
    return (
        <div>
            {
                events.map((event: any, index: number) => (
                    <React.Fragment key={event.id}>
                        <h2>{index}. {event.title}</h2>
                        <button onClick={() => handleClick(event.id)}>Delete Event</button>
                    </React.Fragment>
                ))
            }
        </div>
    )
}
