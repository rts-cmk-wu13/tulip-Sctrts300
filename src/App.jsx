import { useEffect, useState } from "react";
import "./App.css";
import logo from "../assets/thetuliplogo.svg";
import Middlepic from "../assets/unsplash_emqnSQwQQDo.png";
import { FaCarAlt, FaUtensils, FaSpa, FaWifi, FaHeartbeat, FaBeer, FaStar, FaGamepad, 
  FaCamera, FaFacebookSquare, FaYoutube, FaTwitter, FaEnvelope, FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { PiPersonArmsSpread } from "react-icons/pi";


let icons = {
  carAlt: <FaCarAlt/>,
  utensils: <FaUtensils/>,
  spa: <FaSpa/>,
  wifi: <FaWifi/>,
  heartbeat: <FaHeartbeat/>,
  beer: <FaBeer/>,
  star: <FaStar/>,
  gamepad: <FaGamepad/>
};

function App() {
  const [hero, setHero] = useState({ image: "", headline: "" });
  const [rooms, setRooms] = useState([]);
  const [services, setServices] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [spots, setSpots] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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

    fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log("Testimonials:", data);
        if (Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        } else {
          setTestimonials([]);
        }
      })
      .catch(console.error);
  }, []);

  console.log(services);

  if (!hero) return <div>Loading...</div>;

  console.log("Testimonials state:", testimonials);

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
            <a href="#"><FaCamera aria-label="Instagram" /></a>
            <a href="#"><FaFacebookSquare aria-label="Facebook" /></a>
            <a href="#"><FaYoutube aria-label="Youtube" /></a>
            <a href="#"><FaTwitter aria-label="Twitter" /></a>
          </div>
        </nav>
        {hero.image && (
          <img src={hero.image} alt="Hotel Pool" className="hero-img" />
        )}
        <div className="hero-content">
          <img src={logo} alt="Hotel logo" className="hero-logo" />
          <div className="hero-headline">Up to 60% OFF</div>
          <div className="hero-subheadline">On Hotel Booking Online</div>
          <button className="hero-btn">Book Now</button>
        </div>
      </section>
        <div className="booking-bar">
        <div className="booking-input">
          <span><input className="booking-cal" type="date"/></span>          
        </div>
        <div className="booking-input">
          <span><input className="booking-cal" type="date"/></span>
        </div>
        <div className="booking-input">
          <input type="name" min="1" placeholder="Adults" />
          <span className="booking-icon"><RiGroupLine /></span>
        </div>
        <div className="booking-input">
          <input type="name" min="0" placeholder="Children" />
          <span className="booking-icon"><PiPersonArmsSpread /></span>
        </div>
        <button className="booking-btn">Book Now</button>
      </div>

      <br />
      <div className="case">

        <section className="rooms">
          <h2>
            Our <span className="rooms-highlight">Rooms</span>
          </h2>
          <p className="rooms-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra parturient diam sagittis nec cras.
          </p>
          <br />
          <div className="room-list">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-img-wrapper">
                  <img className="room-img" src={room.image} alt={room.type} />
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

          <br />

            <img className="middle" src={Middlepic} alt=""/>

          <br />

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

        <br />

        <section className="spots">
          <div className="spots-grid">
            {spots.map((spot, idx) => (
              <div key={spot.id || idx} className="spot-card">
                <div className="spot-icon">{icons[spot.icon]}</div>
                <h4 className="spot-title">{spot.name}</h4>
                <p className="spot-desc">{spot.text}</p>
              </div>
            ))}
          </div>
        </section>

        <br />

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

        <br />

        <section className="testimonials">
          <h2>
            What <span className="testimonials-highlight">People Say</span>
          </h2>
          <p className="testimonials-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra parturient diam sagittis nec cras.
          </p>
          <div className="testimonials-list">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-group">
                <div className="testimonial-card">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        role="img"
                        aria-label={i < t.stars ? "star" : "star-outline"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-user">
                  <img src={t.imageUrl} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-username">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

            <br />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="The Tulip" />
            </div>
            <div className="footer-desc">
              Lorem ipsum dolor sit amet,<br />consectetur
            </div>
            <div className="footer-social">
              <a href="#"><FaCamera aria-label="Instagram" /></a>
              <a href="#"><FaFacebookSquare aria-label="Facebook" /></a>
              <a href="#"><FaYoutube aria-label="Youtube" /></a>
              <a href="#"><FaTwitter aria-label="Twitter" /></a>
            </div>
            <input className="footer-input" placeholder="Your email address" />
          </div>
          <div className="footer-col">
            <div className="footer-title">Services</div>
            <ul className="footer-list">
              <li>Restaurat</li>
              <li>Coffe Shop</li>
              <li>Car Wash</li>
              <li>Cycle Rent</li>
              <li>Car Rent</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">Reach Us</div>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <a href="#"><FaEnvelope aria-label="Mail" /></a>
                mail@hotel.us
              </div>
              <div className="footer-contact-item">
                <a href="#"><FaPhoneAlt aria-label="Phone" /></a>
                (239) 555-0108
              </div>
              <div className="footer-contact-item">
               <a href="#"><FaMapPin aria-label="location" /></a>
                6391 Elgin St. Celina,<br />Delaware 10299
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
