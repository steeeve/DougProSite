import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Services />
        <Gallery />

        {/* About teaser — full story lives on /about */}
        <section className="about" id="about">
          <div className="container about-grid">
            <div className="about-lead">
              <span className="eyebrow">About Doug</span>
              <h2>A handyman since he was old enough to hold a hammer.</h2>
              <p>
                Doug grew up learning the trade from his grandpa — a contractor
                who believed a job worth doing was worth doing right. These
                days he&apos;s based in Calgary, doing honest, lasting work
                across the city and the foothills.
              </p>
              <Link className="btn btn-primary" href="/about">
                Read Doug&apos;s story &rarr;
              </Link>
            </div>
            <aside className="about-card">
              <h3>What you get with Doug</h3>
              <ul className="check-list">
                <li>Shows up on time, every time</li>
                <li>Clear, honest pricing — no surprises</li>
                <li>Work built to last, not just to look done</li>
                <li>Treats your home like it&apos;s his own</li>
              </ul>
            </aside>
          </div>
        </section>

        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
