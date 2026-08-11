export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/favicon.svg" alt="" width={32} height={32} />
          <div>
            <strong>Doug Pro</strong>
            <span>Handyman Services &mdash; Calgary</span>
          </div>
        </div>
        <p className="footer-tag">Honest work, done right, built to last.</p>
        <p className="footer-copy">
          &copy; {year} Doug Pro — Handyman Services. All work guaranteed.
        </p>
      </div>
    </footer>
  );
}
