import { useEffect, useState } from "react";
import "./App.css";
import logo from "../assets/thetuliplogo.svg";
import Middlepic from "../assets/unsplash_emqnSQwQQDo.png";

function App() {
  const [hero, setHero] = useState({ image: "", headline: "" });
  const [rooms, setRooms] = useState([]);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/hero")
      .then((res) => res.json())
      .then((data) => {
        console.log("Hero:", data);
        setHero(data);
      })
      .catch(console.error);

    fetch("http://localhost:4000/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log("Rooms:", data);
        setRooms(data.roomtypes || []);
      })
      .catch(console.error);

    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log("Services:", data);
        setServices(data.facilities || []);
      })
      .catch(console.error);

    fetch("http://localhost:4000/gallery")
      .then((res) => res.json())
      .then((data) => {
        console.log("Gallery:", data);
        setGallery(data.images || []);
      })
      .catch(console.error);

    fetch("http://localhost:4000/spots")
      .then((res) => res.json())
      .then((data) => {
        console.log("Spots:", data);
        setSpots(Array.isArray(data) ? data : data.spots || []);
      })
      .catch(console.error);
  }, []);

  console.log(services);

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
            <a href="#"><span role="img" aria-label="Instagram">📸</span></a>
            <a href="#"><span role="img" aria-label="Facebook">📘</span></a>
            <a href="#"><span role="img" aria-label="YouTube">▶️</span></a>
            <a href="#"><span role="img" aria-label="Twitter">🐦</span></a>
          </div>
        </nav>
        {hero.image && (
          <img src={hero.image} alt="Hotel Pool" className="hero-img" />
        )}
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
                    <span className="room-icon" role="img" aria-label="bed">🛏️</span> {room.guests} Guests
                    <span className="room-icon" role="img" aria-label="size" style={{marginLeft: "1rem"}}>📏</span> {room.size} kvm
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

            <img className="middle" src={Middlepic} alt=""/>

        <section className="services">
          <h2>
            Our <span className="services-highlight">Services</span>
          </h2>
          <p className="services-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra parturient diam sagittis nec cras.
          </p>
          <div className="services-list">
            {services.map((service) => (
              <div key={service.id} className="service-row">
                <div className="service-info">
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.text1}</p>
                  <p className="service-description">{service.text2}</p>
                </div>
                <img src={service.image} alt={service.name} className="service-img" />
              </div>
            ))}
          </div>
        </section>

        <section className="spots">
          <div className="spots-grid">
            {spots.map((spot, idx) => (
              <div key={spot.id || idx} className="spot-card">
                <div className="spot-icon">{spot.icon}</div>
                <h4 className="spot-title">{spot.name}</h4>
                <p className="spot-desc">{spot.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery">
          <h2>
            Our <span className="gallery-highlight">Gallery</span>
          </h2>
          <p className="gallery-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra parturient diam sagittis nec cras.
          </p>
          <div className="gallery-grid">
            {gallery.map((img, idx) => (
              <div key={img.id || idx} className="gallery-item">
                <img src={img.url} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
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
