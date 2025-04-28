import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">GoGetWell</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <button className="btn-primary">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Empower Your Health Journey</h1>
        <p>Everything you need to track, manage, and improve your health — all in one place.</p>
        <button className="btn-secondary">Get Started for Free</button>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Why Choose GoGetWell?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Smart Tracking</h3>
            <p>Monitor your vitals and activities with real-time insights.</p>
          </div>
          <div className="feature-card">
            <h3>Consult Top Experts</h3>
            <p>Access top doctors and nutritionists easily through the app.</p>
          </div>
          <div className="feature-card">
            <h3>Customized Health Plans</h3>
            <p>Personalized health programs designed for your unique needs.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Simple Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>Free</p>
            <button className="btn-primary">Start Free</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>$9.99 / month</p>
            <button className="btn-primary">Get Premium</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 GoGetWell.ai | Designed for a healthier tomorrow</p>
      </footer>
    </div>
  );
};

export default Home;
