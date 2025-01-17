import React from 'react';
import Resume from '../components/Resume/Resume';
import ProfileBox from '../components/ProfileBox/ProfileBox';

function Home() {
    return (
        <React.Fragment>
            <ProfileBox />
            <Resume />
        </React.Fragment>
    );
}

export default Home;