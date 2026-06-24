import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", textAlign: "center" }}>
      <div style={{ border: "var(--border-width) solid var(--border)", background: "var(--bg-secondary)", padding: "40px", borderRadius: "var(--radius)", boxShadow: "var(--shadow-brutal)", maxWidth: "480px" }}>
        <h1 style={{ fontSize: "72px", fontWeight: "900", margin: "0 0 10px 0", color: "var(--color-primary)" }}>404</h1>
        <h2 style={{ fontSize: "24px", fontWeight: "800", margin: "0 0 20px 0", textTransform: "uppercase" }}>Page Not Found</h2>
        <p style={{ fontSize: "16px", color: "var(--text-secondary)", margin: "0 0 30px 0", lineHeight: "1.5" }}>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary" style={{ display: "inline-block", textDecoration: "none" }}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
