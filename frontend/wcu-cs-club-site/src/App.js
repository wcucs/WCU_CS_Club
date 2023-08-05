import './App.css';
import Blurb from './components/Blurb'
import { officerList } from "./Officers";
import { useState } from 'react';

function App() {
  const [buttonBlurb, setButtonBlurb] = useState(false);

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
          <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1137181218471944323/JosephHeadshot.png" className="Officer" alt="joseph-oladeji" onClick={() => setButtonBlurb(true)} />
          <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1137179231986659348/ZachHeadshot.png" className="Officer" alt="zach-eanes" onClick={() => setButtonBlurb(true)}/>
          <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1137181962616963184/KaushalHeadshot.png" className="Officer" alt="kaushal-patel" onClick={() => setButtonBlurb(true)}/>
          <img src="https://cdn.discordapp.com/attachments/1020055404148961355/1137182271858810980/NolanHeadshot.png" className="Officer" alt="nolan-flinchum" onClick={() => setButtonBlurb(true)}/>
          {officerList.map(({ name, title, linkedIn, image, bio }) => (
          <Blurb 
            trigger={buttonBlurb}
            setTrigger={setButtonBlurb}
            image={image}
            name={name}
            title={title}
            linkedIn={linkedIn}
            bio={bio}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
