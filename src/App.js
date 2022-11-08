import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1}, 
    {title: "Browser's live stream", id: 2}, 
    {title: "Race on moo moo farm", id: 3}, 
  ])

  const handleClose= () => {
    setShowModal(false)
  }

  // const handleOpen= () => {
  //   setShowModal(true)
  // }

 console.log(showModal);

 const handleClick = (id) => {
  console.log(id);
  setEvents((prevEvents) => {
    return prevEvents.filter((event) => event.id !== id )
  })
 }

const subtitle = "All the latest events in Marioland"

  return (
    
    <div className='App'>
    
    <Title title="Event in Your Area" subtitle={subtitle}/>
    
    {showEvents && (
      <div>
        <button onClick={() => {setShowEvents(false)}}>Hide Event</button>
      </div>)}
    {!showEvents && (
      <div>
        <button onClick={() => {setShowEvents(true)}}>Show Event</button>
      </div>)}
    
     {showEvents && <EventList events={events} handleClick={handleClick}/>}
     
      {showModal && (<Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus labore deserunt consectetur exercitationem sequi, aperiam maxime numquam, laudantium sint minima, quod pariatur quam soluta. Aspernatur corrupti consectetur neque cumque debitis?</p>
      </Modal>)}
      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
     
    </div>
    
  )

}

export default App;
