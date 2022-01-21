import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia"

function createEentry(emojiTerm){
  return(
    <Entry
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    meaning={emojiTerm.meaning}
     />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEentry)}
       {/* <Entry 
       emoji="💪"
       name="Tense Biceps"
       meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
       />
       <Entry 
       emoji="🙏"
       name="Person With Folded Hands"
       meaning= "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
       />
       <Entry
       emoji="🤣"
       name= "Rolling On The Floor, Laughing"
    meaning=
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
 
        />
      <Entry
       emoji="🥸"
       name="Disguised face"
    meaning=
      "Face with funny glasses and false eyebrows, bulbous nose and mustache stuck on. Someone wants to hide himself or their intentions. As a disguise: You want to get to the bottom of something unrecognized. Symbolic for carnival."
  
        />
     <Entry
       emoji="🤓"
       name="Nerd Face"
    meaning=
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
        /> */}
      </dl>
    </div>
  );
}

export default App;
