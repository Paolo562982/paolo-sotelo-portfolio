import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Paolo Sotelo home">PS<span>/</span></Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link><Link href="/about">About</Link>
        <a className="nav-cta" href="mailto:paolosotelo@outlook.com">Start a conversation</a>
      </nav>
    </header>
  );
}
