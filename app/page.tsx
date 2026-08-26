import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Services />

        {/* About teaser — full story lives on /about */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-grid">
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
              <div className="about-profile">
                <img
                  src="/assets/doug-profile.png"
                  alt="Portrait of Doug, owner of Doug Pro Handyman Services"
                  width={420}
                  height={420}
                />
                <div className="photo-badge">
                  <strong>Doug</strong>
                  <span>Owner &amp; operator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
