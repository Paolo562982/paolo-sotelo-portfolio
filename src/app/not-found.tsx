import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="page-main shell"><header className="page-intro"><p className="eyebrow"><span aria-hidden="true" /> 404</p><h1>That page isn’t part of the system.</h1><p>The project may still be private, or the link may have changed.</p><Link className="button button-primary" href="/work">Explore the work</Link></header></main>;
}
