import { useEffect, useState } from "react";
import "./App.css";
import logo from "../assets/thetuliplogo.svg";

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
        if (Array.isArray(data.roomtypes)) setRooms(data.roomtypes);
        else setRooms([]);
      })
      .catch(console.error);

    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => {
      
      })
      .catch(console.error);
  }, []);

  console.log(rooms);

  if (!hero) return <div>Loading...</div>;

  return (
    <div>
      <section className="hero">
        <nav className="hero-nav">
          <ul>
            <li>Home</li>
            <li>Rooms & Suites</li>
            <li>Services</li>
            <li>About US</li>
            <li>Booking</li>
          </ul>
          <div className="hero-social">
            <a href="#"><span role="img" aria-label="Instagram"></span></a>
            <a href="#"><span role="img" aria-label="Facebook"></span></a>
            <a href="#"><span role="img" aria-label="YouTube"></span></a>
            <a href="#"><span role="img" aria-label="Twitter"></span></a>
          </div>
        </nav>
        <img src={hero.image} alt="Hotel Pool" className="hero-img" />
        <div className="hero-content">
          <img src={logo} alt="Hotel logo" className="hero-logo" />
          <h1>{hero.headline}</h1>
          <button className="hero-btn">Book Now</button>
        </div>
      </section>

      
      <div className="case">
        <section className="rooms">
          <h2>
            Our <span className="rooms-highlight">Rooms</span>
          </h2>
          <p className="rooms-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra parturient diam sagittis nec cras.
          </p>
          <div className="room-list">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-img-wrapper">
                  <img src={room.image} alt={room.type} />
                  <div className="room-img-overlay">
                    <span className="room-icon"></span> {room.guests} Guests
                    <span className="room-icon" style={{marginLeft: "1rem"}}></span> {room.size} kvm
                  </div>
                </div>
                <div className="room-info">
                  <div className="room-title-row">
                    <h3 className="room-title">{room.type}</h3>
                    <span className="room-price">${room.price}</span>
                  </div>
                  <p className="room-description">{room.description}</p>
                  <a className="room-booking" href="#">
                    Booking <span className="room-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

            <img src="" alt=""/>

        <section className="services">
          <h2>Our Services</h2>
          {}
        </section>

        <section className="gallery">
          <h2>Our Gallery</h2>
          {}
        </section>

        <section className="testimonials">
          <h2>What People Say</h2>
          {}
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
