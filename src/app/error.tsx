"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.page} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", textAlign: "center" }}>
      <div style={{ border: "var(--border-width) solid var(--border)", background: "var(--bg-secondary)", padding: "40px", borderRadius: "var(--radius)", boxShadow: "var(--shadow-brutal)", maxWidth: "480px" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "900", margin: "0 0 10px 0", color: "var(--color-primary)" }}>Oops!</h1>
        <h2 style={{ fontSize: "20px", fontWeight: "800", margin: "0 0 20px 0", textTransform: "uppercase" }}>Something went wrong!</h2>
        <p style={{ fontSize: "16px", color: "var(--text-secondary)", margin: "0 0 30px 0", lineHeight: "1.5" }}>
          An unexpected error occurred. Please try reloading the page or components using the button below.
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button className="btn btn-primary" onClick={() => reset()}>
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
