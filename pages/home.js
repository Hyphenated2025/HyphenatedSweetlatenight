import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#fff',
      color: '#111',
      fontFamily: 'Helvetica Neue, sans-serif',
      padding: '4rem',
      maxWidth: '640px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Hyphenated</h1>
      <p style={{ marginTop: '1rem' }}>
        not just sound. not just culture.<br />
        it’s something in between. something soft, strange, and shared.
      </p>

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>now playing</h2>
        <Link href="https://soundcloud.com/hekusai/genuineerror" target="_blank">
          <span style={{
            padding: '0.5rem 1rem',
            background: '#000',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>listen on soundcloud</span>
        </Link>
      </div>

      <footer style={{ marginTop: '4rem', fontSize: '0.75rem', color: '#aaa' }}>
        © {new Date().getFullYear()} Hyphenated
      </footer>
    </div>
  );
}
