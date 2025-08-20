import React, { useState } from "react";
import "./style.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {/* Navbar */}
      <header className="nav">
        <div className="container nav__inner">
          <div className="brand">
            <div className="brand__dot"></div>
            <span className="brand__name">Deyor</span>
          </div>
          <nav className="nav__links">
            <a href="#" className="is-active">Trips</a>
            <a href="#">Itineraries</a>
            <a href="#">Community</a>
            <a href="#">About</a>
          </nav>
          <div className="nav__cta">
            <button className="btn btn--ghost">Log in</button>
            <button className="btn btn--primary">Plan a Trip</button>
          </div>
        </div>
        <button onClick={() => setDark(!dark)} className="btn btn--ghost">
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="chip">Handpicked • Small Groups</span>
            <h1>
              Find your next <br />
              <span className="grad">Himalayan</span> adventure
            </h1>
            <p className="sub">
              Curated road trips and treks designed by experts. Stay in boutique
              stays, travel with great company, and come back with stories.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary">Explore Trips</button>
              <button className="btn btn--quiet">View Itineraries</button>
            </div>
          </div>
          <div className="hero__card">
            <div className="card media">
              <img src="images/hero_spiti.jpg" alt="Spiti Valley roadtrip" />
              <div className="media__bar">
                <div className="media__thumbs">
                  <span className="dot is-active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="media__label">Spiti Valley • 7N/8D</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="filters container">
        <div className="filters__row">
          <div className="field">
            <label>Destination</label>
            <input type="text" placeholder="Spiti, Ladakh, Bali..." />
          </div>
          <div className="field">
            <label>Duration</label>
            <select>
              <option>Any</option>
              <option>3–5 days</option>
              <option>6–8 days</option>
              <option>9+ days</option>
            </select>
          </div>
          <div className="field">
            <label>Budget</label>
            <select>
              <option>Any</option>
              <option>₹20k–₹40k</option>
              <option>₹40k–₹60k</option>
              <option>₹60k+</option>
            </select>
          </div>
          <button className="btn btn--primary filters__cta">Find trips</button>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="section container">
        <div className="section__head">
          <h2 className="h2">Featured trips</h2>
          <a href="#" className="link">See all</a>
        </div>

        <div className="grid-3">
          <article className="card trip">
            <div className="trip__media">
              <img src="images/Ladakh.jpg" alt="Ladakh" />
              <span className="badge">Bestseller</span>
            </div>
            <div className="trip__body">
              <h3 className="h3">Ladakh Roadtrip</h3>
              <p className="muted">6N/7D • Leh, Nubra, Pangong</p>
              <div className="trip__meta">
                <span>⭐ 4.8 (210)</span>
                <span>₹ 35,000</span>
              </div>
              <div className="trip__cta">
                <button className="btn btn--ghost">Details</button>
                <button className="btn btn--primary">Book</button>
              </div>
            </div>
          </article>

          <article className="card trip">
            <div className="trip__media">
              <img src="images/spiti_road.jpg" alt="Spiti Valley" />
              <span className="badge badge--green">New</span>
            </div>
            <div className="trip__body">
              <h3 className="h3">Spiti Valley Circuit</h3>
              <p className="muted">7N/8D • Kaza, Chitkul, Chandrataal</p>
              <div className="trip__meta">
                <span>⭐ 4.9 (158)</span>
                <span>₹ 28,000</span>
              </div>
              <div className="trip__cta">
                <button className="btn btn--ghost">Details</button>
                <button className="btn btn--primary">Book</button>
              </div>
            </div>
          </article>

          <article className="card trip">
            <div className="trip__media">
              <img src="images/travel_group.jpg" alt="Vietnam" />
              <span className="badge badge--purple">Limited</span>
            </div>
            <div className="trip__body">
              <h3 className="h3">Northern Vietnam</h3>
              <p className="muted">5N/6D • Sapa, Ninh Binh</p>
              <div className="trip__meta">
                <span>⭐ 4.7 (89)</span>
                <span>₹ 42,000</span>
              </div>
              <div className="trip__cta">
                <button className="btn btn--ghost">Details</button>
                <button className="btn btn--primary">Book</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Itinerary Preview */}
      <section className="section container">
        <div className="section__head">
          <h2 className="h2">Itinerary preview</h2>
          <span className="pill">Spiti • 17–24 Aug 2025</span>
        </div>

        <div className="timeline card">
          {[
            ["Day 1 — Chandigarh → Shimla", "115 km • 4–5 hrs • Mall Road sunset"],
            ["Day 2 — Shimla → Sangla", "220 km • Baspa River drive • Kinner views"],
            ["Day 3 — Chitkul → Kalpa", "Village walk • Suicide Point • Roghi"],
            ["Day 4 — Kalpa → Kaza", "Nako • Tabo • Dhankar • Pin Valley"],
            ["Day 5 — Kaza", "Key Monastery • Chicham Bridge • Cafés"],
            ["Day 6 — Kaza → Chandrataal", "Losar • Kunzum • Stargazing camp"],
            ["Day 7 — Chandrataal → Manali", "Batal • Gramphu • Atal Tunnel"],
            ["Day 8 — Manali → Chandigarh", "Airport drop • Trip wrap"]
          ].map(([title, desc], idx) => (
            <div className="timeline__row" key={idx}>
              <div className="dot"></div>
              <div className="timeline__day">
                <h4>{title}</h4>
                <p className="muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="section__head">
          <h2 className="h2">What travelers say</h2>
        </div>
        <div className="grid-3">
          <blockquote className="card quote">
            <p>“Best organized road trip I’ve ever been on. Stunning stays and a lovely crew.”</p>
            <footer>— Sana • ⭐ 5.0</footer>
          </blockquote>
          <blockquote className="card quote">
            <p>“The guides knew hidden cafés and viewpoints. Felt safe and looked after.”</p>
            <footer>— Arjun • ⭐ 4.8</footer>
          </blockquote>
          <blockquote className="card quote">
            <p>“Clear communication, flexible plans, and superb transport. 10/10.”</p>
            <footer>— Naomi • ⭐ 5.0</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h3 className="h2">Ready to go?</h3>
            <p className="muted">Get a custom itinerary in under 24 hours.</p>
          </div>
          <button className="btn btn--primary btn--lg">Start planning</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <div className="brand brand--footer">
              <div className="brand__dot"></div>
              <span className="brand__name">Deyor</span>
            </div>
            <p className="muted small">2nd Floor, Enkay Centre, Udyog Vihar V, Gurugram</p>
          </div>
          <nav className="footer__links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;

