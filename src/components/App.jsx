import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#ff6c00',
          fontWeight: 700,
        }}
      >
        <div className="container">
          <p>
            React
            <span
              style={{
                display: 'inline-block',
                margin: '0 10px',
                padding: '0px 10px',
                background: '#fff',
                color: '#000',
                borderRadius: '3px',
                border: '1px solid #eee',
              }}
            >
              homework
            </span>
            template
          </p>
          <Link to="test" style={{ color: 'red' }}>
            Test page
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
