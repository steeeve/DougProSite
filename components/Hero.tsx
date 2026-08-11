export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Local &middot; Trusted &middot; Honest work</span>
          <h1 className="hero-title">
            Handyman work built on <span className="accent">care</span>, done to{" "}
            <span className="accent">last</span>.
          </h1>
          <p className="hero-lede">
            From snow removal to sprinkler systems, fences to general repairs —
            Doug can handle any job you need done around your home. No job too small, no corners cut.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Get a Free Quote
            </a>
            <a className="btn btn-ghost" href="#gallery">
              See the Work
            </a>
          </div>
          <ul className="hero-stats">
            <li>
              <strong>Lifelong</strong>
              <span>handyman</span>
            </li>
            <li>
              <strong>9+</strong>
              <span>services</span>
            </li>
            <li>
              <strong>1 guy</strong>
              <span>who cares</span>
            </li>
          </ul>
        </div>
        <div className="hero-photo">
          <img
            src="/assets/doug-profile.png"
            alt="Portrait of Doug, owner of Doug Pro Handyman Services"
            width={560}
            height={560}
          />
          <div className="photo-badge">
            <strong>Doug</strong>
            <span>Owner &amp; operator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
