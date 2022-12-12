import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  let localTime = new Date();
  let qatar = new Date(localTime.getTime() + (3600000* 8));
  
  const title = React.createElement
  ('h1', 
  {}, 
  'La hora es:'
  );
  
  const hourPanama = React.createElement
  ('h2',
    {}, 
    'En Panama son las: ' + new Date().toLocaleTimeString('es-PA')
  );
  
  const hourQatar = React.createElement
  ('h2', {}, 'En Qatar son las: ' + qatar.toLocaleTimeString('es-PA')
  );

  const headerApp = React.createElement
  ('div', 
  {className: 'App-header'}, 
  title, hourPanama, hourQatar
  );

  const divApp = React.createElement
  ('div', 
  {className: 'App'}, 
  headerApp
  );

  /*
    const element = (
      <div className="App">
      <header className="App-header">
        <h1>La hora es:</h1>
        <h2>En Panama son las {new Date().toLocaleTimeString('es-PA')}</h2>
        <h2>En Qatar son las {qatar.toLocaleTimeString('es-PA')}</h2>
      </header>
    </div>
    );
  root.render(element) */
  root.render(divApp)
}

export default App;
