import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@css/accueil/Calendar.css';

const events = [
    {
        date: "2024-11-10",
        title: "Test de communiqué",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum inceptos hendrerit posuere nulla egestas inceptos dictum feugiat. Aptent at luctus velit sollicitudin felis pharetra arcu morbi tincidunt. Sapien conubia finibus eget maecenas bibendum maximus molestie inceptos. Pharetra cras pretium felis eleifend curae tortor enim. Rhoncus ultricies nunc eget mattis ante. Posuere at dictum magna; integer senectus curae faucibus vivamus. In euismod magna lectus class porta. Alitora morbi pharetra vehicula facilisi morbi nam. Ullamcorper habitant urna, iaculis penatibus feugiat sagittis. Conubia urna cubilia fusce lobortis aenean pharetra commodo venenatis accumsan. Consequat blandit magna primis; et sagittis consectetur molestie. Netus mi odio urna erat aliquam finibus taciti. Tincidunt dui imperdiet vehicula convallis dolor congue. Metus vestibulum mattis scelerisque accumsan egestas taciti condimentum nisl primis. Amet varius congue orci fringilla eu litora. Odio donec integer quis odio nec sodales. Cursus nunc torquent in adipiscing aenean ad adipiscing. Tempor convallis aliquam est lacinia pulvinar cubilia commodo. Porta pulvinar suspendisse justo metus ligula luctus bibendum netus dolor. Hac massa porta platea arcu amet placerat. Lacus hac malesuada dapibus fusce senectus cursus sociosqu."
    }
]

function CalendarWithDetails() {
    const [date, setDate] = useState(new Date());
    {/*const [event, setEvent] = useState([]);*/}
    const [selectedEvent, setSelectedEvent] = useState(null);

    {/*
    useEffect(() => {
        fetch('/path/to/events.json') 
          .then(response => response.json())
          .then(data => setEvents(data))
          .catch(error => console.error("Erreur lors de la récupération des événements :", error));
      }, []);
    

      const handleDateChange = (date) => {
        setDate(date);
        const eventForSelectedDate = events.find(event => new Date(event.date).toDateString() === date.toDateString());
        setSelectedEvent(eventForSelectedDate || null);
    };
    */}

    const hasEvent = (date) => {
        // On crée une nouvelle date avec la même année, mois et jour, mais avec l'heure fixée à minuit.
        const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        return events.some(event => {
            const eventDate = new Date(event.date); // Convertit l'événement en objet Date
            return eventDate.setHours(0, 0, 0, 0) === formattedDate.setHours(0, 0, 0, 0);
        });
    };
    

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    
        const eventForSelectedDate = events.find(event => {
            const eventDate = new Date(event.date); // Convertir la date de l'événement
            const selectedDateCopy = new Date(selectedDate);
            // Comparer les dates en ne tenant compte que de l'année, du mois et du jour
            return eventDate.setHours(0, 0, 0, 0) === selectedDateCopy.setHours(0, 0, 0, 0);
        });
    
        setSelectedEvent(eventForSelectedDate || null);
    };
    

    return (
        <div className="calendar-with-details">
          <div className="calendar-section">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={({ date }) => {
                return hasEvent(date) ? 'event-day' : ''; // Applique la classe 'event-day' si l'événement existe
            }}
          />
          </div>
          <div className="details-section">
            {selectedEvent ? (
              <>
                <h3>{selectedEvent.title}</h3>
                <p>{selectedEvent.description}</p>
                <button className="read-more-button">En lire plus</button>
              </>
            ) : (
              <p>Sélectionnez une date pour voir les détails d'un événement.</p>
            )}
          </div>
        </div>
      );
}

export default CalendarWithDetails;