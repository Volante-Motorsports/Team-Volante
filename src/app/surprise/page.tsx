import { repoBasePath } from '@/utils/pathUtils';

export default function SurprisePage() {
  // Use the explicit basePath defined in next.config.js for both dev and prod
  const gameSrc = `${repoBasePath}/escape-road-game/index.html`;

  return (
    <div id="gameContainer" style={{
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      width: '100%',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', position: 'absolute', top: '10px', zIndex: 10, pointerEvents: 'none' }}>
        <h1 style={{ fontWeight: 800, fontSize: '1.5rem', margin: '0.25rem 0', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
          🏎️ Surprise!! Escape Road Game!! 🏎️
        </h1>
        <h3 style={{ margin: '0.25rem 0', fontSize: '0.9rem', opacity: 0.8 }}>
          Use arrow keys or tap controls to play!
        </h3>
      </div>
      <iframe
        src={gameSrc}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        allow="autoplay; fullscreen"
        title="Escape Road Game"
      />
    </div>
  )
}