import React from 'react'

const About = () => {
  return (
    <div className="py-spacersm md:py-spacermd lg:py-spacerlg">
        <div className="max-w-2xl px-4 py-12 text-left">
            <h2 className="text-5xl mb-8 text-subtitlesm md:text-subtitlemd lg:text-subtitlelg">About me</h2>
            <p className="text-bodysm md:text-bodymd lg:text-bodylg">
              I'm a 26 years old Norwegian, and I'm really proud to say that I learned to create websites on my own!
              <br />
              <br />
              July 2021 I took the step to change careers coming from a construction background and moved over to the web development universe.
              Starting out I took the <span className="border-b-2">front end engineer</span> course over at CodeCademy.
              After the course while browsing the web, I came over something called WebGL.
              The sites I saw people were building amazed me, and I saw so many ways to use my creativity through being able to create the same sites.
              <br />
              Few months later I finished the <span className="border-b-2">Three.js journey</span> course made by Bruno Simon, 
              who is a amazing French developer that is in the forefront when it comes to teaching how to create WebGL scenes using Three.js.
              <br />
              Since then I had the pleasure to work with several clients across the globe creating amazing WebGL scenes with different libraries
            </p>
        </div>
    </div>
  )
}

export default About