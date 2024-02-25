import React from "react";
// create a Links.js to house the github and linkedin urls, import it here
import Links from "./Links";

// pass in the bio, github, and linkedin as arguments first
function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* conditional rendering, translated to "Check if !bio is falsey or includes undefined, null, false, 0, or an empty string, etc. OR "||" if bio is "strictly equal to "===" and empty string, then use a ternary operator "?" as kind of an inline if-else, if the condition before the "?" is true, return what is immediately after the "?", which is nothing. If it is false, render what comes after the ":", which is a paragraph element displaying the "bio" */}
      {!bio || bio ==="" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  
        {/* add your <Links /> component here */}
        <div id="links">
          <h3><Links github={github} linkedin={linkedin}></Links></h3>
      </div>
    </div>
  );
  }
export default About;