import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hero, setHero] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/hero")
      .then((res) => res.json())
      .then((data) => setHero(data))
      .catch(console.error);

    fetch("http://localhost:4000/rooms")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRooms(data);
        else if (Array.isArray(data.rooms)) setRooms(data.rooms);
        else setRooms([]);
      })
      .catch(console.error);
  }, []);

  if (!hero) return <div>Loading...</div>;

  return (
    <div>
      <section className="hero">
        <img src={hero.image} alt="Hotel Pool" className="hero-img" />
        <div className="hero-content">
          <h1>{hero.headline}</h1>
          <p>Up to 60% OFF on early bookings!</p>
        </div>
      </section>
<div className="case">
      <section className="rooms">
        <h2>Our Rooms</h2>
        <div className="room-list">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.name} />
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        {/* Add your services here */}
      </section>

      <section className="gallery">
        <h2>Our Gallery</h2>
        {/* Add your gallery images here */}
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        {/* Add testimonials here */}
      </section>
      </div>

      <footer className="footer">
        <p>&copy; The Tulip</p>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default App;
