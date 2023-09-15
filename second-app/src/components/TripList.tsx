import {useState} from "react";

export default function TripList() {
    const [trips, setTrips] = useState<object[]>([])

    console.log(trips)

    fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => setTrips(json))

    return (
        <div>
            <h2>Triplist</h2>
        </div>
    );
}
