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

      <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1135308674395557958/wccsc-logo3.png" className="Home-graphic" alt="homepage" />

      <div className="Events-bar">
        <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1135314055347834990/group-photo-event.png" className="" alt="group-event" />
        <div className="App">
          <h1 className="Event-header">Upcoming Event: TBD</h1>
          <button className="Gold-button">Find out more</button>
        </div>
      </div>
      
      <div className="App-header">  
        <p>
          CS Club Officers
        </p>
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
    </div>
  );
}

export default App;
