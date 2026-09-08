import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="container"
      style={{ display: 'grid', gap: 'var(--space-6)', paddingBlock: 'var(--section-y)' }}
    >
      <h1 className="sectionTitle">Not found</h1>
      <p className="lead">That page doesn&rsquo;t exist.</p>
      <Link href="/" style={{ borderBottom: '1px solid currentColor', justifySelf: 'start' }}>
        Back to the shelf
      </Link>
    </div>
  )
}
