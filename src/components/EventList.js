import styles from "./EventList.module.css"

const EventList = ({events, handleClick}) => {


    return(
        <div>
            {events && events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                    <h2> {index} - {event.title} </h2>
                    <button onClick={() => handleClick(event.id)}>Delete event</button>
            </div>))}

        </div>
    
         
)}
 
export default EventList;