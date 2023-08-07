import './App.css';
import Blurb from './components/Blurb'
import { officerList } from "./Officers";
import React, { useState } from 'react';

function App() {
  const [officerBlurbs, setOfficerBlurbs] = useState({});

  // Function to toggle the blurb visibility for a specific officer
  const toggleBlurb = (officerName) => {
    setOfficerBlurbs((prevBlurbs) => ({
      ...prevBlurbs,
      [officerName]: !prevBlurbs[officerName],
    }));
  };

  return (
    <div className="App">

      {/* Menu Bar */}
      <div className="Menu-bar">
        <div>
          <img src ="https://cdn.discordapp.com/attachments/1020055404148961355/1135305104837320745/AITFw-wtZ0VsYHLjq704E1uwf3AIwklLHcHKudnZjjCMkFdRbH8BLo7ri3BnxvfrHtrPmDUtKCYY737nevTRCv0qpsyK6TApw2560-h962.png" className="Corner-logo" alt="logo" /> 
        </div>
        <div>
          <button className="Standard-button">About Us</button>
          <button className="Standard-button">Events</button>
          <button className="Standard-button">Resources</button>
          <button className="Purple-button">Join</button>
        </div>
      </div>

      {/* Home page graphic */}
      <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1135308674395557958/wccsc-logo3.png" className="Home-graphic" alt="homepage" />

      {/* Events bar */}
      <div className="Events-bar">
        <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1135314055347834990/group-photo-event.png" className="" alt="group-event" />
        <div className="App">
          <h1 className="Event-header">Upcoming Event: TBD</h1>
          <button className="Gold-button">Find out more</button>
        </div>
      </div>
      
      {/* "About Us" section */}
      <div className="App-header">
        <br></br><h2>About Us</h2>
        <p>We are an official chapter of the ACM or Association for Computing Machinery, but welcome anyone who is ready to learn and have some fun. Our club is dedicated to providing useful resources and practical workshops to help in the development of mission critical skills that any person will need throughout their career. We have people from many majors and try to offer a diverse range of activities for all.</p> 
        <br></br><h2>CS Club Officers</h2>
        <div className="Officers">
          {officerList.map(({ name, title, linkedIn, image, cardImage, bio }) => (
            <React.Fragment key={name}>
              <img
                className="Officer"
                src={image}
                alt={name}
                onClick={() => toggleBlurb(name)}
              />
              {officerBlurbs[name] && (
                <Blurb
                  image={image}
                  cardImage={cardImage}
                  name={name}
                  title={title}
                  linkedIn={linkedIn}
                  bio={bio}
                  onClose={() => toggleBlurb(name)} 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom bar for social media links */}
      <div className="Baseboard">
        <img width='50px' src="https://cdn.discordapp.com/attachments/1020055404148961355/1137947454965301288/discord.jpg" alt="discord"></img>
        <p>© Western Carolina CS Club 2023</p>
      </div>

    </div>
  );
}

export default App;
