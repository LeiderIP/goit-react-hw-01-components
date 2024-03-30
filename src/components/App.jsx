import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from 'components/Profile'; // Importa el componente Profile
import Statistics from 'components/Statistics'; // Importa el componente Statistics
import userData from 'json/user.json'; // Importa los datos del usuario
import statsData from 'json/data.json'; // Importa los datos de estadísticas

const App = () => {
  return (
    <div>
      {/* Tarea 1: Renderiza el componente Profile y pasa los datos del usuario como props */}
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      {/* Tarea 2: Renderiza el componente Statistics y pasa los datos de estadísticas como props */}
      <Statistics title="Upload stats" stats={statsData} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
