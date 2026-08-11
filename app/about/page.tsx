import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Doug — Doug Pro, Handyman Services",
  description:
    "Meet Doug — a Calgary handyman who grew up learning the trade from his contractor grandpa and carried that same pride through the Boy Scouts. Honest, lasting work across Calgary and the foothills.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="about-page">
        <div className="container">
          <div className="about-page-head">
            <span className="eyebrow">About Doug</span>
            <h1>A handyman since he was old enough to hold a hammer.</h1>
            <p className="about-page-lede">
              Calgary-based, outdoorsy, and proud of work that lasts — here&apos;s
              the story behind Doug Pro.
            </p>
          </div>

          <div className="about-photos">
            <figure>
              <img
                src="/assets/about-doug-skiing.png"
                alt="Doug skiing at Castle Mountain on a snowy day"
              />
              <figcaption>Castle Mountain, AB — a rare day off</figcaption>
            </figure>
            <figure>
              <img
                src="/assets/about-doug-mountaineering.png"
                alt="Doug geared up for a winter mountaineering trip with an ice axe"
              />
              <figcaption>Home turf, the Canadian Rockies</figcaption>
            </figure>
          </div>

          <div className="container about-grid about-story">
            <div className="about-lead">
              <h2>The story</h2>
              <p>
                Doug grew up alongside his grandpa — a contractor who believed a
                job worth doing was worth doing right. While other kids were
                inside, Doug was out back learning how to fix things, build
                things, and leave them better than he found them.
              </p>
              <p>
                He carried that same spirit through the <strong>Boy Scouts</strong>,
                where he picked up the motto that still guides his work today:{" "}
                <em>be prepared</em>, and leave no trace. Whether it&apos;s a
                snow-packed driveway or an overgrown garden, Doug shows up ready,
                works clean, and finishes proud.
              </p>
              <p>
                These days Doug calls Calgary home. When he&apos;s not on a job,
                you&apos;ll find him in the Rockies — skiing, ice climbing, and
                generally making the most of what Alberta has to offer. That same
                hands-on, get-it-done attitude comes through in every job he
                takes on around the city.
              </p>
              <p>
                He loves helping people — and it shows in the lasting work he
                leaves behind. When Doug fixes something, it stays fixed.
              </p>
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

          <div className="about-cta">
            <Link className="btn btn-primary" href="/#contact">
              Get a Free Quote
            </Link>
            <Link className="btn btn-ghost back-link" href="/">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </section>
      <ScrollReveal />
    </main>
  );
}
