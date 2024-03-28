import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from 'components/Profile'; // Importa el componente Profile
import userData from 'json/user.json'; // Importa los datos del usuario

const App = () => {
  return (
    <div>
      {/* Renderiza el componente Profile y pasa los datos del usuario como props */}
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;