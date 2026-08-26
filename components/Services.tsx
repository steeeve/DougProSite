const SERVICES = [
  {
    icon: "🌿",
    title: "Garden Clean Up",
    desc: "Seasonal tidy-ups, overgrowth cleared, beds refreshed — ready for whatever's next.",
  },
  {
    icon: "🌱",
    title: "Mowing",
    desc: "Crisp, even cuts and clean edges — lawns that look cared for, not just cut.",
  },
  {
    icon: "🪵",
    title: "Stump Grinding",
    desc: "Unsightly stumps ground down below grade so the area is safe, level, and usable.",
  },
  {
    icon: "💧",
    title: "Sprinkler Systems",
    desc: "Installation and repair — even coverage, no leaks, no wasted water.",
  },
  {
    icon: "🧱",
    title: "Pathways",
    desc: "Patios, walkways, and stepping stones laid level and built to stay put.",
  },
  {
    icon: "🪚",
    title: "Fences",
    desc: "Repairs and new installs — straight, sturdy, and built to weather the years.",
  },
  {
    icon: "🚛",
    title: "Junk Removal",
    desc: "Haul-away of yard waste, debris, and old stuff — gone by the time he leaves.",
  },
  {
    icon: "🛠️",
    title: "General Repairs",
    desc: "The little things that pile up — fixed, tightened, replaced, and done right.",
  },
  {
    icon: "❄️",
    title: "Snow Removal",
    desc: "Driveways, walkways, and decks cleared early so your day doesn't start with a shovel.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>One call covers the whole list.</h2>
          <p>
            If it&apos;s around your home or yard, Doug can probably handle it.
            Here&apos;s what he does most.
          </p>
        </div>
        <ul className="service-grid" role="list">
          {SERVICES.map((s) => (
            <li className="service-card" key={s.title}>
              <span className="service-icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
        <p className="services-foot">
          Don&apos;t see your job listed?{" "}
          <a href="#contact">Just ask</a> — if it&apos;s in Doug&apos;s
          wheelhouse, he&apos;ll take care of it.
        </p>
      </div>
    </section>
  );
}
