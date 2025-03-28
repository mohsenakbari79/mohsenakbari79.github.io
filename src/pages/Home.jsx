import React from 'react';
import Resume from '../components/Resume/Resume';
import ProfileBox from '../components/ProfileBox/ProfileBox';
import './Home.css'; 
function Home() {
  return (
    <div id="home-content"> 
      <ProfileBox />
      <Resume />
    </div>
  );
}

export default Home;