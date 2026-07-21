// Linor's LM monogram (her own gold script logo, transparent PNG → webp).
// `size` sets the rendered height; width scales with the logo's aspect ratio.
export default function Logo({ size = 54, className = '' }) {
  return (
    <img
      src="/logo.webp"
      alt="Linor Mor — LM monogram"
      className={`logo-img ${className}`}
      style={{ height: size, width: 'auto' }}
      width="360"
      height="265"
    />
  )
}
