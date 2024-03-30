import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from 'components/Profile'; 
import Statistics from 'components/Statistics'; 
import FriendList from 'components/FriendList'; 
import userData from 'json/user.json'; 
import statsData from 'json/data.json'; 
import friendsData from 'json/friends.json'; 

const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
