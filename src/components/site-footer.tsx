import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><p className="eyebrow"><span aria-hidden="true" /> Have a useful problem?</p><h2>Let’s make it clearer—and build the right thing.</h2></div>
        <div className="footer-links"><a href="mailto:paolosotelo@outlook.com">paolosotelo@outlook.com</a><Link href="/work">Selected work</Link><Link href="/about">About Paolo</Link></div>
      </div>
      <div className="shell footer-base"><span>© {new Date().getFullYear()} Paolo Sotelo</span><span>Built for clarity, usefulness, and trust.</span></div>
    </footer>
  );
}
