import EventProps from "../models/EventPropsModel.tsx";

export default interface IEventListProps {
    events: EventProps[]
    handleClick: (id: number) => void
}
