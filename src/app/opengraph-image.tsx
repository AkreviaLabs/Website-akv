import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Akrevia — Software built with precision';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f7f7f5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #dcdcd7',
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              fontFamily: 'monospace',
              letterSpacing: '0.14em',
              color: '#111111',
              marginBottom: 40,
            }}
          >
            AKREVIA
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#666666',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Software engineering studio building reliable web, mobile, and backend systems.
          </div>
          
          <div style={{ display: 'flex', marginTop: 60, gap: '20px' }}>
             <div style={{ padding: '10px 20px', background: '#1e9e5a', color: 'white', fontSize: 24, borderRadius: '4px' }}>Offline-first</div>
             <div style={{ padding: '10px 20px', background: '#ececE8', color: '#111', fontSize: 24, borderRadius: '4px' }}>Next.js</div>
             <div style={{ padding: '10px 20px', background: '#ececE8', color: '#111', fontSize: 24, borderRadius: '4px' }}>Backend Systems</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
